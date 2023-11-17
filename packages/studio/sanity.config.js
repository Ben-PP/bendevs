import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './schemas'
import deskStructure from './deskStructure'
import { githubActionsWidget } from './plugins/sanity-github-actions-widget'

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
          githubActionsWidget({
            layout: {
              width: 'small',
              height: 'small'
            },
            sites: [
              {
                siteName: 'bendevs.com',
                githubUser: 'ben-pp',
                githubRepo: 'bendevs',
                namespace: 'bendevs',
                eventType: 'deploy_web_from_sanity'
              }
            ]
          })
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
