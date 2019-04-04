import { Box, Flex } from "rebass";

import Fade from "react-reveal/Fade";
import Link from "gatsby-link";
import React from "react";
import { Tag } from "../components/tag";
import { graphql } from "gatsby";
import styled from "styled-components";
import { withTheme } from "styled-components";

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #7c3319;
    text-decoration: none;
  }
`;

const SlugWrapper = styled.div`
  color: #000;
  &:hover {
    color: #7c3319;
    text-decoration: none;
  }
`;

const Blog = ({ data, theme }) => (
  <Box width={theme.defaultWidths}>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <Fade bottom delay={i * 100} key={node.id}>
        <SlugWrapper>
          <StyledLink to={node.fields.slug}>
            {/* TODO: no inline styles */}
            <h3 style={{ "fontWeight": "700" }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#BBB", textDecoration: "none" }}>
                — {node.frontmatter.date}
              </span>
            </h3>
            <Box>
              {node.excerpt}
              <Flex justifyContent="flex-start" mt={2}>
                {node.frontmatter.tags.map((t, i) => (
                  <Tag key={i}>{t.toUpperCase()}</Tag>
                ))}
              </Flex>
            </Box>
          </StyledLink>
        </SlugWrapper>
      </Fade>
    ))}
  </Box>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
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
export default withTheme(Blog);
