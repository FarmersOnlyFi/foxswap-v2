import { Box, BoxProps } from "@chakra-ui/react";

const ContentWrapper = (props: BoxProps) => {
  return (
    <Box
      bg="bg-canvas"
      minH="100vh"
      borderTopLeftRadius={{ base: "none", lg: "2rem" }}
      {...props}
    />
  );
};

export default ContentWrapper;
