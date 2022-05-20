import { Notification } from "@usedapp/core";
import {Box, Text, Stack, StackDivider, useColorModeValue} from "@chakra-ui/react";
import { ReactElement } from "react";

interface NotificationProps {
  key: number,
  title: string,
  description: string,
  icon?: ReactElement,
  date: Date
}

export const NotificationElement = (notification: NotificationProps) => (
  <Box
    bg="bg-surface"
    width={{ base: 'full', sm: 'md' }}
    boxShadow={useColorModeValue('md', 'md-dark')}
    borderRadius="lg"
  >
    <Stack direction="row" divider={<StackDivider />} spacing="0">
      <Box p="4">
        <Stack spacing="1">
          <Text fontSize="sm" fontWeight="medium">
            Updates Available
          </Text>
          <Text fontSize="sm" color="muted">
            A new version is available. Please upgrade for the best experience.
          </Text>
        </Stack>
      </Box>
    </Stack>
  </Box>
)
