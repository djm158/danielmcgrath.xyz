// TODOS:
//  * remove inline css style
//  * factor out modified card component
//  * add prop types

import { Card as RebassCard, Text } from "rebass";
import { maxWidth, minWidth } from "styled-system";

import React from "react";
import styled from "styled-components";

const Card = styled(RebassCard)(minWidth, maxWidth);

export const Tag = ({ children }) => (
  <Card
    bg="black"
    borderRadius={8}
    maxWidth={[200]}
    mr={2}
    pb={1}
    pl={2}
    pr={2}
    pt={1}
    style={{ opacity: "0.7" }}
  >
    <Text
      color="white"
      fontFamily="Inconsolata"
      fontSize={1}
      fontWeight={400}
      letterSpacing={1.5}
    >
      {children}
    </Text>
  </Card>
);
