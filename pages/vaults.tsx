import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { VaultTable } from "@/components/modules/VaultTable/VaultTable";
import { VaultHeader } from "@/components/modules/VaultHeader/VaultHeader";

const Vaults = () => {
  return (
    <TableContainer>
      <VaultHeader />
      <VaultTable size={'lg'} />
    </TableContainer>
  )
}

export default Vaults
