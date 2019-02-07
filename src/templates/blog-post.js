import React from "react";
import ContentWrapper from "../layouts/contentwrapper";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <ContentWrapper>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </ContentWrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;
