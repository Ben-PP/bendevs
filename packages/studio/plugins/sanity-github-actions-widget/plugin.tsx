import GitHubActionsWidget from './GithubActionsWidget'
import { Site } from './types'

type SanityPluginConfig = {
  sites: Site[]
  layout: any
}

export const githubActionsWidget = (config: SanityPluginConfig) => {
  return {
    name: 'github-actions-widget',
    component: function component() {
      return <GitHubActionsWidget sites={config.sites} />
    },
    layout: config.layout
  }
}
