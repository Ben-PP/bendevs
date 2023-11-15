import React from 'react'
import { useEffect, useState } from 'react'
import { useSecrets, SettingsView } from '@sanity/studio-secrets'
import { Octokit } from '@octokit/core'
//import Button from '@sanity/ui/Button'
const namespace = 'githubActionsWidget'
const pluginConfigKeys = [
  {
    key: 'apiKey',
    title: 'Github personal access token'
  }
]

const triggerGitHubActions = async (apiKey, type) => {
  const octokit = new Octokit({ auth: apiKey })
  // Implement the logic to trigger GitHub Actions here
  switch (type) {
    case 'bendevs.com': {
      try {
        const response = await octokit.request(
          'POST /repos/ben-pp/bendevs/dispatches',
          {
            data: JSON.stringify({
              event_type: 'deploy_web_from_sanity'
            })
          }
        )

        if (response.status === 204) {
          console.log('GitHub Actions triggered successfully')
        } else {
          console.error('Failed to trigger GitHub Actions')
        }
      } catch (error) {
        console.log('Error triggering GitHub Actions', error)
      }
    }
  }
}

const GitHubActionsWidget = () => {
  const { secrets } = useSecrets(namespace)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div>
      <h2>Deploy</h2>
      {showSettings === true ? (
        <SettingsView
          title={'Github token'}
          namespace={namespace}
          keys={pluginConfigKeys}
          onClose={() => {
            setShowSettings(false)
          }}
        />
      ) : null}
      <button
        onClick={() => {
          triggerGitHubActions(secrets.apiKey, 'bendevs.com')
        }}
      >
        Trigger
      </button>
      <button onClick={() => setShowSettings(true)}>Change API key</button>
    </div>
  )
}

export default GitHubActionsWidget
