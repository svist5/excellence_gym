import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  HStack
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            <HStack>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              <img  src="images/gym-logo.png"  width="25%"></img>
            </HStack>
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Excellence Fitness. All rights reserved
            </Text>
            
          </Stack> 
          <Stack align={'flex-start'}>
            <Heading>Company</Heading>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Support</Heading>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            {/* <Link href={'#'}>Legal</Link> */}
            {/* <Link href={'#'}>Privacy Policy</Link> */}
            {/* <Link href={'#'}>Satus</Link> */}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Want us to call you?</Heading>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your Phone Number'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue("#ff726f")}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}