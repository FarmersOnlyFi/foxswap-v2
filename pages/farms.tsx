import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { FarmsTable } from "@/components/modules/FarmsTable/FarmsTable";
import MulticallItems from "@/components/modules/MulticallList";
const Vaults = () => {
  return (
    <TableContainer>
      <MulticallItems />
      {/*<FarmsTable size={'lg'} />*/}
    </TableContainer>
  )
}

export default Vaults
