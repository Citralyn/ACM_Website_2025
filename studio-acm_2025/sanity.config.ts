import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defineCliConfig} from 'sanity/cli' // may use later 


export default defineConfig({
  name: 'default',
  title: 'ACM_2025',

  projectId: "rkpvhhck",
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
