import type { Moment } from '@/types/portfolio'

// 사진 파일을 public/photos/ 폴더에 아래 파일명으로 넣으면 표시됩니다.
// url에 해당 LinkedIn 게시물 주소를 넣으면 카드가 클릭 가능해지고 LinkedIn 아이콘이 표시됩니다.
// 게시물 주소는 LinkedIn에서 게시물 우측 상단 ⋯ 메뉴 → "Copy link to post"로 복사할 수 있어요.
export const moments: Moment[] = [
  {
    src: '/photos/aws.webp',
    alt: 'Chanyeong at the AWS office',
    caption: 'Invited to AWS Student Community Day 2026 in Seoul',
    sub: 'Seoul, South Korea · 2026',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7479152619706544129/',
  },
  {
    src: '/photos/bespin.webp',
    alt: 'Chanyeong at the Bespin Global office',
    caption: 'First day at Bespin Global as an AI Software Engineer',
    sub: 'Seoul, South Korea · 2026',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7467213468073463808/',
  },
  {
    src: '/photos/vitality-awards.webp',
    alt: 'Tech Tribe Awards with the Vitality team',
    caption: 'Tech Tribe Awards with the Vitality team',
    sub: 'UK · 2024',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7219637696611106816/',
  },
  {
    src: '/photos/bu-team.webp',
    alt: 'Chanyeong and his Bournemouth University team presenting their project to J.P. Morgan',
    caption: 'Winning 1st place at JPMorgan’s Computing in Business Week',
    sub: 'Bournemouth · 2022',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6935899938622988288/',
  },
  {
    src: '/photos/nepal.webp',
    alt: 'Chanyeong with students and volunteers at a school in Kathmandu',
    caption: 'Teaching English at a school in Kathmandu',
    sub: 'Nepal · 2019',
    url: 'https://ty2019superadventure2kathmandu.home.blog/',
    urlIcon: 'link',
  },
]
