import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import homePage from './homePage'
import constructionsPage from './constructionsPage'
import architecturePage from './architecturePage'
import interiorsPage from './interiorsPage'
import finishingDetailsPage from './finishingDetailsPage'
import service from './service'
import project from './project'
import processStep from './processStep'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings, 
    homePage, 
    constructionsPage, 
    architecturePage, 
    interiorsPage, 
    finishingDetailsPage, 
    service, 
    project, 
    processStep
  ],
}
