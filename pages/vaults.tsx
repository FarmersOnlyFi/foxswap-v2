import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { VaultTable } from "../components/Table/VaultTable";
import { VaultHeader } from "../components/VaultHeader";
import VaultMeta from "../components/Table/VaultMeta";
import useGetVaultUserInfo from "../hooks/useGetVaultUserInfo";

const Vaults = () => {
  const result = useGetVaultUserInfo()
  console.log(result)
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
