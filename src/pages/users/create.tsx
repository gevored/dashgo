import { Box , Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { Sidebar } from "../../components/Sidebar/index";
import { Header  } from "../../components/Header";
import Link from "next/link";

export default function CreateUser(){
    return(
        <Box>
            <Header/>
            <Flex width="100%" my ="6" maxWidth={1480} minWidth={550}  mx="auto" px="6">
                <Sidebar/>

                <Box flex ="1" borderRadius={8} bg ="gray.800" p = {["6","8"]}>
                    <Heading size="lg" fontWeight="normal"> Criar Usuário</Heading>

                    <Divider my="6" borderColor ="gray.700" />
                    
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w ="100%">
                            <Input name="name" label="Nome Completo"/>
                            <Input name="email" label="E-mail" type="email"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w ="100%">
                            <Input name="password" type = "password" label="Senha"/>
                            <Input name="passwordConfirmation" type = "password"  label="Confirmação da Senha"/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
} 