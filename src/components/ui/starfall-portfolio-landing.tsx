import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink { label: string; href: string; }
interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode; };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void; };
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        // the aurora is a soft blur — render at half resolution and stretch, ~4x cheaper
        const SCALE = 0.5;
        const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
        renderer.setSize(window.innerWidth * SCALE, window.innerHeight * SCALE, false);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.zIndex = '0';
        renderer.domElement.style.display = 'block';
        currentMount.appendChild(renderer.domElement);
        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth * SCALE, window.innerHeight * SCALE) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        let animationFrameId: number;
        let lastFrame = 0;
        // 30fps is indistinguishable on a slow-moving blur and halves GPU load again
        const animate = (t: number) => {
            animationFrameId = requestAnimationFrame(animate);
            if (document.documentElement.dataset.bgOff === '1') return;
            if (t - lastFrame < 33) return;
            lastFrame = t;
            material.uniforms.iTime.value += 0.032;
            renderer.render(scene, camera);
        };
        const handleResize = () => { renderer.setSize(window.innerWidth * SCALE, window.innerHeight * SCALE, false); renderer.domElement.style.width = '100%'; renderer.domElement.style.height = '100%'; material.uniforms.iResolution.value.set(window.innerWidth * SCALE, window.innerHeight * SCALE); };
        window.addEventListener('resize', handleResize);
        animationFrameId = requestAnimationFrame(animate);
        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };
    }, []);
    return <div ref={mountRef} />;
};

// --- INTERNAL STARFIELD OVERLAY (twinkling stars + occasional shooting stars) ---
interface Star { x: number; y: number; r: number; base: number; spd: number; ph: number; tint: string; }
interface Meteor { x: number; y: number; len: number; speed: number; size: number; trail: string; a: number; amax: number; }

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // direction of travel: down-right (matches the aurora streaks); trail streams back up-left
    const DIR_X = 0.83, DIR_Y = 0.55;
    const TINTS = ['#DCE6FF', '#CBF3FF', '#EAE2FF', '#FFFFFF'];
    const TRAILS = ['125, 227, 255', '111, 168, 255', '155, 123, 255', '196, 205, 255'];

    let W = 0, H = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let raf = 0;

    const seedStars = () => {
      stars = [];
      const n = Math.floor((W * H) / 10000);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.1 + 0.3,
          base: Math.random() * 0.5 + 0.12,
          spd: Math.random() * 1.6 + 0.4,
          ph: Math.random() * 6.28,
          tint: TINTS[Math.floor(Math.random() * TINTS.length)],
        });
      }
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const spawnMeteor = () => {
      const i = Math.floor(Math.random() * TRAILS.length);
      meteors.push({
        x: W * (Math.random() * 0.9 - 0.15),
        y: -40 - Math.random() * H * 0.3,
        len: 140 + Math.random() * 160,
        speed: 5.5 + Math.random() * 5,
        size: 0.9 + Math.random() * 1.1,
        trail: TRAILS[i],
        a: 0,
        amax: 0.5 + Math.random() * 0.4,
      });
    };

    const drawStars = (t: number) => {
      for (const s of stars) {
        const tw = reduced ? 1 : 0.6 + 0.4 * Math.sin(t * 0.001 * s.spd + s.ph);
        ctx.globalAlpha = s.base * tw;
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.2832);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const drawMeteor = (m: Meteor) => {
      const tx = m.x - DIR_X * m.len;
      const ty = m.y - DIR_Y * m.len;
      const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
      g.addColorStop(0, `rgba(${m.trail}, ${m.a})`);
      g.addColorStop(0.3, `rgba(${m.trail}, ${m.a * 0.4})`);
      g.addColorStop(1, `rgba(${m.trail}, 0)`);
      ctx.lineCap = 'round';
      // soft outer glow
      ctx.strokeStyle = `rgba(${m.trail}, ${m.a * 0.12})`;
      ctx.lineWidth = m.size * 4;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
      // bright core trail
      ctx.strokeStyle = g;
      ctx.lineWidth = m.size;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
      // glowing head
      const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 5);
      hg.addColorStop(0, '#FFFFFF');
      hg.addColorStop(0.35, `rgba(${m.trail}, ${m.a * 0.5})`);
      hg.addColorStop(1, `rgba(${m.trail}, 0)`);
      ctx.globalAlpha = m.a;
      ctx.fillStyle = hg;
      ctx.beginPath(); ctx.arc(m.x, m.y, m.size * 5, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 1;
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (document.documentElement.dataset.bgOff === '1') return;
      ctx.clearRect(0, 0, W, H);
      drawStars(t);
      // shooting stars stay rare so they feel special
      if (meteors.length < 2 && Math.random() < 0.008) spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += DIR_X * m.speed;
        m.y += DIR_Y * m.speed;
        if (m.a < m.amax) m.a = Math.min(m.amax, m.a + 0.03);
        drawMeteor(m);
        if (m.x > W + m.len || m.y > H + m.len) meteors.splice(i, 1);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    if (reduced) {
      ctx.clearRect(0, 0, W, H);
      drawStars(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
};

// --- BACKGROUND WRAPPER: fades out as you scroll past the hero ---
const BackgroundLayer: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const start = vh * 0.2;  // fully visible until 20% of a screen scrolled
      const end = vh * 0.9;    // fully gone by ~one screen
      const fade = Math.min(1, Math.max(0, 1 - (window.scrollY - start) / (end - start)));
      el.style.opacity = String(fade);
      // flag lets the render loops skip GPU/canvas work while invisible
      document.documentElement.dataset.bgOff = fade === 0 ? '1' : '';
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.documentElement.dataset.bgOff = '';
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <AuroraBackground />
      <Starfield />
    </div>
  );
};

// --- DEFAULT DATA ---
const defaultData: Required<Omit<PortfolioPageProps, 'showAnimatedBackground'>> = {
  logo: { initials: 'MT', name: 'Meng To' },
  navLinks: [ { label: 'About', href: '#about' }, { label: 'Projects', href: '#projects' }, { label: 'Skills', href: '#skills' } ],
  resume: { label: 'Resume' },
  hero: { titleLine1: 'Creative Developer &', titleLine2Gradient: 'Digital Designer', subtitle: 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.', },
  ctaButtons: { primary: { label: 'View My Work' }, secondary: { label: 'Get In Touch' }, },
  projects: [ { title: 'FinTech Mobile App', description: 'React Native app with AI-powered financial insights.', tags: ['React Native', 'Node.js'] }, { title: 'Data Visualization Platform', description: 'Interactive dashboard for complex data analysis.', tags: ['D3.js', 'Python'] }, { title: '3D Portfolio Site', description: 'Immersive WebGL experience with 3D elements.', tags: ['Three.js', 'WebGL'] }, ],
  stats: [ { value: '50+', label: 'Projects Completed' }, { value: '5+', label: 'Years Experience' }, { value: '15+', label: 'Happy Clients' }, ],
};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  resume = defaultData.resume,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  projects = defaultData.projects,
  stats = defaultData.stats,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="bg-background text-foreground geist-font">
      {showAnimatedBackground && <BackgroundLayer />}
      <div className="relative">
        <nav className="w-full px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">
                        <span className="geist-font text-sm font-bold text-foreground">{logo.initials}</span>
                    </div>
                    <span className="geist-font text-lg font-medium text-foreground">{logo.name}</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm">{link.label}</a>
                    ))}
                </div>
                <button onClick={resume.onClick} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font">{resume.label}</button>
            </div>
        </nav>
        <div className="divider" />
        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-8 float-animation">
                    <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4">
                        {hero.titleLine1}
                        <span className="gradient-text block tracking-tight">{hero.titleLine2Gradient}</span>
                    </h1>
                    <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">{hero.subtitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button onClick={ctaButtons.primary.onClick} className="primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]">{ctaButtons.primary.label}</button>
                    <button onClick={ctaButtons.secondary.onClick} className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3">{ctaButtons.secondary.label}</button>
                </div>
                <div className="divider mb-16" />
                {projects.length > 0 && (
                    <>
                        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                            {projects.map((project, index) => (
                                <div key={index} className="glass-card rounded-2xl p-6 text-left">
                                    <div className="project-image rounded-xl h-32 mb-4 flex items-center justify-center">{project.imageContent}</div>
                                    <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divider mb-16" />
                    </>
                )}
                <div id="skills" className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">{stat.value}</div>
                                <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>
                            </div>
                            {index < stats.length - 1 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export {PortfolioPage};
