import * as React from "react";
import {getMulticallAddress} from "@/utils/addressHelpers";
import {getContractInterface} from "@/hooks/web3/contract-helpers";
import MultiCallAbi from "@/config/abi/Multicall.json";
import {utils} from "ethers";
import {Call, useContractFunction} from "@usedapp/core";
import {useEffect} from "react";
import {Button, Stack, Text} from "@chakra-ui/react";
import UserTemplate from "@/components/templates/User";


const User = () => <UserTemplate />

export default User