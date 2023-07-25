import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Portal } from '@chakra-ui/react'
import {
    Box
  } from '@chakra-ui/react'
function ChakraIcons() {
  return (
    <div>
        <PhoneIcon />

        <AddIcon boxSize={6} />

        <WarningIcon w={8} h={8} color="red.500" />
        <Box bg='red.400' color='white'>
      I'm here,
      <Portal>This text is portaled at the end of document.body!</Portal>
    </Box>
            </div>
  )
}

export default ChakraIcons