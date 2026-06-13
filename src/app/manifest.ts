import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Visionaire Engineering & Interiors',
    short_name: 'Visionaire',
    description: 'Modern architecture and construction solutions designed with precision, elegance, and functionality.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/icon.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
