import { Call, useContractFunction } from "@usedapp/core";
import { getMulticallAddress } from "@/utils/addressHelpers";
import { getContractInterface } from "@/hooks/web3/contract-helpers";
import MultiCallAbi from "@/config/abi/Multicall.json";
import  {Button, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

const UserTemplate = () => (
  <Stack>
    <Button>
      User
    </Button>
  </Stack>
)

export default UserTemplate