import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  stega: {
    enabled: false,
  },
  // Ensure fresh data is always fetched
  fetch: async (url, init) => {
    return fetch(url, { ...init, cache: 'no-store' })
  }
})
