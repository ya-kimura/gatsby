import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{position}</p>
    </div>
  )
}

export default Profile
