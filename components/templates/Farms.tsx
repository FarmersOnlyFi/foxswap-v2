import { TableContainer } from "@chakra-ui/react";
import { FarmsTable } from "@/components/modules";
import * as React from "react";

const FarmsTemplate = () => (
  <TableContainer>
    <FarmsTable size={"lg"} />
  </TableContainer>
);

export default FarmsTemplate;
