import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import homePage from './homePage'
import constructionsPage from './constructionsPage'
import architecturePage from './architecturePage'
import interiorsPage from './interiorsPage'
import falseCeilingPage from './falseCeilingPage'
import profileLightingPage from './profileLightingPage'
import puttyPaintingPage from './puttyPaintingPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings, 
    homePage, 
    constructionsPage, 
    architecturePage, 
    interiorsPage, 
    falseCeilingPage,
    profileLightingPage,
    puttyPaintingPage
  ],
}
