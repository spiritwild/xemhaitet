import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"

const Post = (props, { collection }) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null
  return (
    <Page
      { ...props }
      header={
        <header>
        {
          pageDate &&
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        }
        </header>
      }
    />
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
