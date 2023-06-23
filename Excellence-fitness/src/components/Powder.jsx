import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text,Button,Image } from '@chakra-ui/react'
const Powder=()=>{
    return (<>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  bgColor={"black"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src="/images/bicep.jpg"
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody >
      <Heading size='md' color="white">Need Protein Supplements?</Heading>

      <Text py='2'color={"white"}>
      We also provide our members with Protein Supplements at a cheaper price compared to Market.
      </Text>
      <Button variant='solid' colorScheme='teal'>
        Buy Now
      </Button>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>
</>)
}
export default Powder;