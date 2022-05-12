import * as React from "react";
import {getMulticallAddress} from "@/utils/addressHelpers";
import {getContractInterface} from "@/hooks/web3/contract-helpers";
import MultiCallAbi from "@/config/abi/Multicall.json";
import {utils} from "ethers";
import {Call, useContractFunction} from "@usedapp/core";
import {useEffect} from "react";
import {Button, Stack, Text} from "@chakra-ui/react";


const User = (calls: Call[]) => {
  const address = getMulticallAddress();
  const contract = getContractInterface(MultiCallAbi, address)
  const { state, send } = useContractFunction(contract, 'aggregate', {transactionName: 'Aggregate'})
  const { status } = state
  const calldata = calls.map(call => [call.contract, contract.encodeFunctionData(call.method, call.args)]);
  console.log(status)

  const handleMulti = () => {
    const x = send({ calls: calldata })
    console.log('sent')
    console.log(x)
  }

  return (
    <Stack>
      <Button onClick={handleMulti}>
        Mutlicall
      </Button>
      <Text>Status: {status}</Text>
    </Stack>
  )
}

export default User