import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './schemas'
import deskStructure from './deskStructure'
import GitHubActionsWidget from './plugins/GithubActionsWidget'

export default defineConfig([
  {
    name: 'bendevs',
    title: 'bendevs',
    projectId: 'c1ml1moo',
    basePath: '/bendevs',
    dataset: 'production',

    plugins: [
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
      deskTool({
        structure: deskStructure
      }),
      visionTool()
    ],

    schema: {
      types: schemaTypes
    }
  }
])
