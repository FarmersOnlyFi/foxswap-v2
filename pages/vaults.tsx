import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
// import { VaultTable } from "@/components/modules/VaultHeader/VaultTable";
// import { VaultHeader } from "@/components/modules/VaultHeader/VaultHeader";
import { VaultTable } from "@/components/modules/VaultTable/VaultTable";
import { VaultHeader } from "@/components/modules/VaultHeader/VaultHeader";

const Vaults = () => {
  return (
    <>
      <VaultHeader />
      <TableContainer>
        <VaultTable size={'lg'} />
      </TableContainer>
    </>
  )
}

export default Vaults
