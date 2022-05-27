import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/react";
import TokenList from "@/components/modules/TokenList";
import useSwapContext from "@/contexts/swap/context";

interface CurrencyModalProps {
  isOpen: boolean,
  onClose: () => void
}

export default function CurrencySearchModal({ isOpen, onClose }: CurrencyModalProps) {
  const { inputCurrency, outputCurrency, isInputField, setFieldType } = useSwapContext()

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Token</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TokenList />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
