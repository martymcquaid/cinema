export interface CastMember {
  name: string
  role: string
  bio?: string
}

export interface Movie {
  id: string
  title: string
  poster: string
  synopsis: string
  description: string
  runtime: number
  ageRating: string
  formats: string[]
  trailer?: string
  cast: CastMember[]
  showtimes: string[]
}

export const MOVIES: Movie[] = [
  {
    id: 'eternity-echoes',
    title: 'Eternity Echoes',
    poster: 'https://images.unsplash.com/photo-1498654200107-5fc9a63b8a99?q=80&w=1200&auto=format&fit=crop',
    synopsis:
      'An interstellar odyssey following a crew that uncovers humanity’s forgotten past and a future yet to be written.',
    description:
      'In a distant orbit, the crew of the starcruiser Lumen chase a signal that redefines time itself. Amid dazzling nebulae, they confront a choice that could fracture reality. Eternity Echoes blends soaring visuals with intimate storytelling to deliver a cinematic experience that lingers long after the credits roll.',
    runtime: 128,
    ageRating: 'PG-13',
    formats: ['2D', 'IMAX', 'Dolby Atmos'],
    trailer:
      'https://www.youtube.com/watch?v=example',
    cast: [
      { name: 'Ava Monroe', role: 'Captain Rhea Solis', bio: 'A strategic leader with a hidden past.' },
      { name: 'Noah Kim', role: 'Navigator Lio Chen', bio: 'A brilliant tactician with a calm demeanor.' },
      { name: 'Mira Patel', role: 'Engineer Nyx Rao', bio: 'Genius inventor who keeps the ship running.' },
    ],
    showtimes: ['12:00 PM', '3:30 PM', '7:00 PM', '9:45 PM'],
  },
  {
    id: 'neon-city',
    title: 'Neon City Chronicles',
    poster: 'https://images.unsplash.com/photo-1517604931259-ec83d4df3f0f?q=80&w=1200&auto=format&fit=crop',
    synopsis:
      'A cyber-noir thriller through rain-slick streets and luminous billboards.',
    description:
      'In a rain-soaked metropolis where neon dictates fate, a duo teams up to unravel a conspiracy that stretches to the highest towers. Neon City Chronicles fuses high-energy action with moody atmosphere and a pulse-pounding synth soundtrack.',
    runtime: 142,
    ageRating: 'R',
    formats: ['2D', '4DX'],
    trailer: 'https://www.youtube.com/watch?v=example2',
    cast: [
      { name: 'Jax Rivera', role: 'Rogue Detective Kaine', bio: 'Charmed by danger, driven by justice.' },
      { name: 'Lena Ward', role: 'Techie Mina Park', bio: 'Hacker with a heart of gold.' },
    ],
    showtimes: ['1:15 PM', '4:20 PM', '8:00 PM'],
  },
  {
    id: 'galaxy-echo',
    title: 'Galaxy Echoes: The Awakening',
    poster: 'https://images.unsplash.com/photo-1517604891257-6e3e9b2f8f0b?q=80&w=1200&auto=format&fit=crop',
    synopsis:
      'A sweeping space opera about legends that awaken among the stars.',
    description:
      'When a dormant civilization stirs beneath the ice of a frozen moon, a scientist must bridge two eras to save a world on the edge of oblivion. Galaxy Echoes blends grand spectacle with heartfelt performances.',
    runtime: 150,
    ageRating: 'PG-13',
    formats: ['2D', 'IMAX 3D'],
    trailer: 'https://www.youtube.com/watch?v=example3',
    cast: [
      { name: 'Mira Adebayo', role: 'Dr. Sora Hwan', bio: 'Astrophysicist who reads the universe like a book.' },
      { name: 'Takumi Ito', role: 'Captain Ryo Tanaka', bio: 'Stoic leader with a wry sense of humor.' },
    ],
    showtimes: ['11:00 AM', '2:50 PM', '6:10 PM', '9:10 PM'],
  },
]
