import { TableContainer } from "@chakra-ui/react";
import { VaultHeader, VaultTable } from "@/components/modules";
import * as React from "react";

const VaultsTemplate = () => (
  <TableContainer>
    <VaultHeader />
    <VaultTable size={"lg"} />
  </TableContainer>
);

export default VaultsTemplate;
