import React from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack, Box, Heading, StackDivider, Flex, DrawerProps } from '@chakra-ui/react';
import { links } from "../../App";
import Links from "../shared/links/Links";
import { CloseIcon } from "@chakra-ui/icons";

const Offcanvas = ({isOpen, onClose}: DrawerProps): JSX.Element => {
    return (
        <Drawer placement='left' size='xs' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader><i>Moovie</i></DrawerHeader>
          <DrawerBody>
          <VStack spacing={5} divider={<StackDivider />} align='stretch'>
            <Box>
              <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='lg'>Pages:</Heading>
                <CloseIcon w='3' h='3' _hover={{cursor: 'pointer'}} onClick={onClose} />
              </Flex>
            <VStack spacing='7%'>
              <Links links={links} closeOffcanvas={onClose} />
            </VStack>
            </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}

export default Offcanvas