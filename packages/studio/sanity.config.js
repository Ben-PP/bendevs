import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './schemas'
import deskStructure from './deskStructure'
import GitHubActionsWidget from './plugins/GithubActionsWidget'

export default defineConfig({
  name: 'default',
  title: 'bendevs',
  projectId: 'c1ml1moo',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure
    }),
    dashboardTool({
      widgets: [
        {
          name: 'github-actions-trigger',
          layout: {
            width: 'small',
            height: 'small'
          },
          component: GitHubActionsWidget
        }
      ]
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes
  }
})
