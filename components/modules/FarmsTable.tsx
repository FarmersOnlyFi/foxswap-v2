import {
  Badge,
  HStack,
  Icon,
  IconButton,
  SkeletonText,
  Stack,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { DoubleCurrencyLogo } from "./DoubleCurrencyLogo";
import { FarmsResults, getFarms } from "state/farms/hooks";
import { getPrices } from "state/farms/lpPrices";
import { parseBalance } from "../../util";

export const FarmsTable = (props: TableProps) => {
  const [open, setOpen] = useState(false);
  const [farmsData, setFarmsData] = useState<FarmsResults>([]);
  useEffect(() => {
    async function fetchData() {
      console.log("fetching data");
      const lpPrices = await getPrices();
      const farmsResults = await getFarms(lpPrices);

      setFarmsData(farmsResults);
      console.log("farmsResults", farmsResults);
    }

    fetchData();
  }, []);

  return (
    <Table {...props} size={"sm"}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Pair</Text>
                <Icon as={IoArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th></Th>
          <Th>Yearly</Th>
          <Th>Apr</Th>
          <Th>Liquidity</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {farmsData.map((farm, i) => (
          <Tr key={i}>
            <Td>
              <Stack>
                <DoubleCurrencyLogo />
                {farmsData[i].farmConfig.lpSymbol ? (
                  <Text>{farmsData[i].farmConfig.lpSymbol}</Text>
                ) : (
                  <SkeletonText noOfLines={1} />
                )}
              </Stack>
            </Td>
            <Td>
              <Badge size="sm" colorScheme={"teal"}>
                {farmsData[i].farmConfig.router}
              </Badge>
            </Td>
            <Td>
              <Text color="muted">{farm.farmConfig.lpSymbol}</Text>
            </Td>
            <Td>
              <Text color="muted">{farm.apr}</Text>
            </Td>
            <Td>
              <Text color="muted">{parseBalance(farm.lpTotalSupply)}</Text>
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  icon={
                    open ? (
                      <TriangleUpIcon fontSize="1.25rem" />
                    ) : (
                      <TriangleDownIcon fontSize="1.25rem" />
                    )
                  }
                  variant="ghost"
                  aria-label="Expand Row"
                  onClick={() => setOpen(!open)}
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
