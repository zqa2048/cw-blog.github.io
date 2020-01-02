import React from "react"
import { css } from "@emotion/core"
import {useStaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const LinkList =props=>{
    return <Link 
            to={`/${props.toPath}/`} 
            css={css`
              float: right;
              color: red;
              `}
            >{props.name}</Link>
  }
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <LinkList toPath={`/about/`} name="About!" />
      <br />
      <LinkList toPath={`/my-files/`} name="my-files" />
      <br />
      <LinkList toPath={`/about-css-module/`} name="CSS模块" />
      {children}
    </div>
  )}
