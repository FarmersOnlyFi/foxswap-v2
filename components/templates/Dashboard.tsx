import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import Card from "../elements/Card";
import ContentWrapper from "@/components/elements/ContentWrapper";
import {
  shortenAddress,
  useBlockNumber,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { Stat } from "@/components/elements";
import { FaAddressCard, FaCoins, FaSquare } from "react-icons/fa";
import usePrices from "@/hooks/usePrices";

const DashboardTemplate = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const blockNum = useBlockNumber();
  const priceResults = usePrices();
  console.log(priceResults);

  return (
    <ContentWrapper>
      <Container py="8">
        <Stack spacing={{ base: "8", lg: "6" }}>
          <Stack
            spacing="4"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align={{ base: "start", lg: "center" }}
          >
            <Stack spacing="1">
              <Heading
                size={useBreakpointValue({ base: "xs", lg: "sm" })}
                fontWeight="medium"
                fontSize={26}
              >
                Dashboard
              </Heading>
              <Text color="muted">All important metrics at a glance</Text>
            </Stack>
          </Stack>
          <Stack spacing={{ base: "5", lg: "6" }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
              <Stat
                icon={FaCoins}
                label={"Balance"}
                value={etherBalance ? formatEther(etherBalance) : "0.00"}
              />
              <Stat
                icon={FaAddressCard}
                label={"Account"}
                value={account ? shortenAddress(account) : "0x00"}
              />
              <Stat
                icon={FaSquare}
                label={"Chain"}
                value={blockNum?.toString() as string}
              />
            </SimpleGrid>
          </Stack>
          <Card minH="sm" />
        </Stack>
      </Container>
    </ContentWrapper>
  );
};

export default DashboardTemplate;
