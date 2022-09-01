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
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import logo from "./logo.png"
  import "./Gym.css";

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={'#080808'}
        color={'white'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={3}>
              <Box>
                <Image src={logo}/>
              </Box>
              <Stack direction={'row'} justify={"center"} spacing={6} fontSize={"30px"}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter id='twitter' />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube  id='youtube'/>
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram id='insta'/>
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'} width={"270px"}>
              <Text fontSize={"25px"}>Quick Links</Text>
              <Link fontSize={"18px"} href={'#'}>About us</Link>
              <Link fontSize={"18px"} href={'#'}>FAQs</Link>
              <Link fontSize={"18px"} href={'#'}>Privacy Policy</Link>
              <Link fontSize={"18px"} href={'#'}>WTF in News</Link>
              <Link fontSize={"18px"} href={'#'}>Terms & Conditions</Link>
              <Link fontSize={"18px"} href={'#'}>Refund & Cancellation</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text fontSize={"25px"}>Explore</Text>
              <Link fontSize={"18px"} href={'#'}>Areanas</Link>
              <Link fontSize={"18px"} href={'#'}>Studios</Link>
              <Link fontSize={"18px"} href={'#'}>Nutritions</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
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