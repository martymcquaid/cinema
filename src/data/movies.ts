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

// Real films catalog with actual posters where possible
export const MOVIES: Movie[] = [
  {
    id: 'interstellar',
    title: 'Interstellar',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    synopsis:
      'A team of explorers travels through a wormhole in space in an epic battle to save humanity.',
    description:
      'When Earth’s future looks bleak, a fearless crew pilots a spacecraft through a mysterious wormhole to discover new worlds and save mankind. A grand, emotional sci‑fi spectacle about love, time, and survival.',
    runtime: 169,
    ageRating: 'PG-13',
    formats: ['2D', 'IMAX', 'Dolby Atmos'],
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper', bio: 'A former NASA pilot leading humanity’s last chance.' },
      { name: 'Anne Hathaway', role: 'Dr. Amelia Brand', bio: 'Astrophysicist with a hopeful heart.' },
      { name: 'Jessica Chastain', role: 'Murph', bio: 'A scientist and the emotional core of the story.' },
    ],
    showtimes: ['12:00 PM', '3:30 PM', '7:00 PM', '9:45 PM'],
  },
  {
    id: 'inception',
    title: 'Inception',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
    synopsis:
      'A thief who steals secrets through dream-sharing confronts his own past as a powerful corporation fights to bury the truth.',
    description:
      'A mind-bending thriller where a team enters layered dreams to plant an idea. Visually stunning, emotionally charged, and endlessly inventive.',
    runtime: 148,
    ageRating: 'PG-13',
    formats: ['2D', 'IMAX'],
    trailer: 'https://www.youtube.com/watch?v=8hP9D6kZseM',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Cobb', bio: 'A skilled thief who enters dreams.' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur', bio: 'Clever point-man and dream architect.' },
      { name: 'Elliot Page', role: 'Ariadne', bio: 'Architect who scaffolds dreamscapes.' },
    ],
    showtimes: ['11:00 AM', '2:50 PM', '6:10 PM', '9:20 PM'],
  },
  {
    id: 'dunkirk',
    title: 'Dunkirk',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Poster.jpg',
    synopsis:
      'A tense, immersive WWII epic told across land, sea, and air.',
    description:
      'Three perspectives—land, sea, and air—converge as this mission to evacuate soldiers unfolds in a blistering, time‑driven narrative.',
    runtime: 106,
    ageRating: 'PG-13',
    formats: ['2D', 'IMAX'],
    trailer: 'https://www.youtube.com/watch?v=F-eMt3SrfFU',
    cast: [
      { name: 'Fionn Whitehead', role: 'Tommy', bio: 'A young soldier in the evacuation.' },
      { name: 'Tom Hardy', role: 'Farrier', bio: 'The brave RAF pilot in the skies.' },
      { name: 'Kenneth Branagh', role: 'Commander Bolton', bio: 'A strategic figure under pressure.' },
    ],
    showtimes: ['10:30 AM', '1:30 PM', '5:00 PM', '8:30 PM'],
  },
]
