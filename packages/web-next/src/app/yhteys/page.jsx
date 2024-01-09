'use client'

import { helloWorld } from '../../lib/firebase'

const ContactView = () => {
  const onClick = () => {
    helloWorld()
      .call()
      .then((result) => {
        console.log(result)
      })
  }
  return (
    <div>
      <button onClick={onClick}>test hello function</button>
    </div>
  )
}

export default ContactView
