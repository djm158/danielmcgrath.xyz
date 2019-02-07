import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import ContentWrapper from "../layouts/contentwrapper";

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #7c3319;
    textdecoration: none;
  }
`;

const SlugWrapper = styled.div`
  color: #000;
  &:hover {
    color: #7c3319;
    textdecoration: none;
  }
`;
const Blog = ({ data }) => (
  <ContentWrapper>
    {/* <h1></h1> */}
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <SlugWrapper key={node.id}>
        <StyledLink to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span style={{ color: "#BBB", textDecoration: "none" }}>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </StyledLink>
      </SlugWrapper>
    ))}
  </ContentWrapper>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
export default Blog;
