import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { VaultTable } from "../components/Table/VaultTable";
import { VaultHeader } from "../components/VaultHeader";

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
