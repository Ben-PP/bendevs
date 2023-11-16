import React from 'react'
import SiteDeploy from './SiteDeploy'
//import Button from '@sanity/ui/Button'

/*
 * Generate finegrained token in github settings -> developer settings ->
 * Personal access tokens -> fine-grained tokens. Set expiration and give
 * read & write permission for content.
 * (Or use classic token set to not expire)
 */
const GitHubActionsWidget = () => {
  return (
    <div style={{ margin: '2em' }}>
      <h2>Deploy</h2>
      <SiteDeploy
        user='ben-pp'
        repo='bendevs'
        siteName={'bendevs.com'}
        namespace={'bendevs'}
        eventType='deploy_web_from_sanity'
      />
    </div>
  )
}

export default GitHubActionsWidget
