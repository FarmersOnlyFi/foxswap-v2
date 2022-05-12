import {
  As,
  Button,
  ButtonProps,
  HStack,
  Icon,
  Text,
  LinkOverlay
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'

interface NavButtonProps extends ButtonProps {
  icon: As
  label: string,
  href: string
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, href, ...buttonProps } = props
  return (
    <Link href={href} passHref>
      <Button
        as={LinkOverlay}
        variant="ghost"
        justifyContent="start"
        {...buttonProps}
      >
        <HStack spacing="3">
          <Icon
            as={icon}
            boxSize="9"
            p={2}
            color="#B9BFFF"
            bg="gray.800"
            borderRadius={6}
          />
          <Text>{label}</Text>
        </HStack>
      </Button>
    </Link>
  )
}