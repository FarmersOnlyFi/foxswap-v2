import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { FarmsTable } from "@/components/modules/FarmsTable/FarmsTable";

const Vaults = () => {
  return (
    <TableContainer>
      <FarmsTable size={'lg'} />
    </TableContainer>
  )
}

export default Vaults
