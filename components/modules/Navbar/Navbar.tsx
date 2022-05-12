import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from '@/components/elements/Logo/Logo'
import { Sidebar } from '@/components/modules/Sidebar/Sidebar'
import { ToggleButton } from '@/components/modules/ToggleButton/ToggleButton'

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box
      py="4"
      px={{ base: '4', md: '8' }}
      bg="transparent"
    >
      <Flex justify="space-between">
        <Box boxSize="3xs" pb={0} maxH={65}>
          <Logo />
        </Box>
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}