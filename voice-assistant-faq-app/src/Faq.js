import React from 'react';
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

export const Faq = () => {
  return (
    <Flex direction="column" p={4}>
      <Box mb="8">
        <Heading size="md">Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
      </Accordion>
    </Flex>
  )
}
