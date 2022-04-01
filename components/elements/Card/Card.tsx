import {
  Box,
  BoxProps,
  useColorModeValue
} from "@chakra-ui/react";
import * as React from "react";

const Card = (props: BoxProps) => (
  <Box
    minH="36"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
)

export default Card