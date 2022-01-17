import {Flex, Button, Stack } from '@chakra-ui/react'
import  {Input} from '../components/Form/input'
import {SubmitHandler,useForm, useFormState} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const signInFormSchema = yup.object().shape(
  {
    email:yup.string().required('e-mail obrigatório').email('formato invalido'),
    password: yup.string().required('senha obrigatória')
  }
)


type SignInFormData = {
  email:string;
  password:string
}

export default function SignIn() {

  const {register , handleSubmit , formState : {errors}} = useForm({
    resolver:yupResolver(signInFormSchema)
  })


  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData>= (values ) =>{
   console.log(values)    
  }

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
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Stack spacing={4}>
        <Input 
        name = 'email'
        label='email' 
        type='email' 
        error = {errors.email}
        {...register("email")} />
        <Input 
        name = 'password' 
        label='password' 
        type='password' 
        error = {errors.password}
        {...register("password")}
        />
      </Stack>
        
      <Button size = "lg" type ="submit" marginTop={6} colorScheme="pink">Entrar</Button>
    </Flex>
  </Flex>

  )
}
