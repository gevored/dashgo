import {Flex, Button, Stack } from '@chakra-ui/react'
import  {Input} from '../components/Form/input'

export default function Home() {
  return (
  <Flex w="100vw" 
    h= "100vh" 
    alignItems="center" 
    justify="center">

    <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      padding={8}
      borderRadius={8} 
      flexDir="column"
    >
      <Stack spacing={4}>
        <Input name = 'email' label='email' type='email'/>
        <Input name = 'password' label='password' type='password'/>
      </Stack>
        
      <Button size = "lg" type ="submit" marginTop={6} colorScheme="pink">Entrar</Button>
    </Flex>
  </Flex>

  )
}
