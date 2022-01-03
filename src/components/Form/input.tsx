import {Flex, Input as ChakraInput, Button, Stack , FormLabel, FormControl , InputProps as InputPropsChakra } from '@chakra-ui/react'


interface InputProps extends InputPropsChakra{
    name: string;
    label?:string;
}

export function Input({name,label, ...rest}: InputProps){
    return(
        <FormControl>
         { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <ChakraInput
          name = {name}
          id={name}
          _hover={{
            bgColor:"gray.900"
          }}
          size="lg"
          bg='gray.900'
          focusBorderColor='pink.500'
          variant="filled"
          {...rest}
          />
        </FormControl>
    )
}


