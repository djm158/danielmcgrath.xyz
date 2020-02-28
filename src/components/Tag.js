import { Card as RebassCard, Text } from "rebass";
import { maxWidth, minWidth, opacity } from "styled-system";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Card = styled(RebassCard)(minWidth, maxWidth, opacity);

export const Tag = ({ children }) => (
  <Card
    bg="black"
    borderRadius={8}
    maxWidth={[200]}
    mr={2}
    opacity={0.7}
    pb={[0.5,1]}
    pl={[1,2]}
    pr={[1,2]}
    pt={[0.5,1]}
  >
    <Text
      color="white"
      fontFamily="Inconsolata"
      fontSize={[12, 1]}
      fontWeight={400}
      letterSpacing={1.5}
    >
      {children}
    </Text>
  </Card>
);

Tag.propTypes = {
  children: PropTypes.node,
};
