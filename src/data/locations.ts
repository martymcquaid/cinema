export interface Location {
  id: string
  name: string
  address: string
  screens: number
  formats: string[]
  amenities: string[]
  photos?: string[]
  phone?: string
  email?: string
  parking?: string
  accessibility?: string
}

export const LOCATIONS: Location[] = [
  {
    id: 'london-covent-garden',
    name: 'Cinema X Covent Garden',
    address: '12 Regent Street, London WC2E 9AQ',
    screens: 9,
    formats: ['2D', 'IMAX', '4DX'],
    amenities: ['VIP Lounge', 'Dolby Atmos', 'Bar & Bistro', 'Wheelchair Accessible'],
    photos: [],
    phone: '+44 20 7946 0000',
    email: 'coventgarden@cinemax.example',
    parking: 'Paid parking nearby (3 min walk)',
    accessibility: 'Wheelchair accessible, hearing loop'
  },
  {
    id: 'new-york-times-square',
    name: 'Cinema X Times Square',
    address: '1510 Broadway, New York, NY 10036',
    screens: 12,
    formats: ['2D', '3D', 'IMAX'],
    amenities: ['Gourmet Concessions', 'VIP Suites', 'Robot-Assisted Service'],
    photos: [],
    phone: '+1 212-555-0101',
    email: 'timesquare@cinemax.example',
    parking: 'Valet & nearby garages',
    accessibility: 'Accessible entrances, captioning available'
  }
]
