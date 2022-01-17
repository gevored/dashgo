import { Input as ChakraInput, Button, Stack , FormLabel, FormControl , InputProps as InputPropsChakra, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldErrors } from 'react-hook-form'


interface InputProps extends InputPropsChakra{
    name: string;
    label?:string;
    error: FieldErrors;
}


const InputBase : ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name,label, error,...rest}, ref) =>{
    return(
        <FormControl  isInvalid = {!!error}>
         { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <ChakraInput
          name = {name}
          
          _hover={{
            bgColor:"gray.900"
          }}
          size="lg"
          bg='gray.900'
          focusBorderColor='pink.500'
          variant="filled"
          ref={ref}
          {...rest}
          />

          {
            !!error &&(
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
            )
            }
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)
