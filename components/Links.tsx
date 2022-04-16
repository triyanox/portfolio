import React from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import LinkButton from './LinkButton'
type Props = {}

const Links = (props: Props) => {
  return (
    <div className="mt-4 mb-4 flex w-full flex-row items-center justify-start gap-8">
      <LinkButton>
        <SiGithub />
        Github
      </LinkButton>
      <LinkButton>
        <SiLinkedin /> LinkedIn
      </LinkButton>
      <LinkButton>
        <SiTwitter /> Twitter
      </LinkButton>
    </div>
  )
}

export default Links
