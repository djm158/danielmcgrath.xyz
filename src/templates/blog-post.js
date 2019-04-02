import { Box } from "rebass";
import React from "react";
import { graphql } from "gatsby";
import { withTheme } from "styled-components";

export default withTheme(({ data, theme }) => {
  const post = data.markdownRemark;
  return (
    <Box width={theme.defaultWidths}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Box>
  );
});

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
