import { Box } from "rebass";
import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Box width={[1, 1, 1, 7/8, 3 / 4, 1 / 2]}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Box>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
