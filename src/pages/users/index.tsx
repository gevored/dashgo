import { Box , Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/Sidebar/index";
import { Header  } from "../../components/Header/index";
import Link from 'next/link'


export default function UserList(){
    return(
        <Box>
            <Header/>
            <Flex width="100%" my ="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex ="1" borderRadius={8} bg ="gray.800" p = "8">
                    <Flex mb = "8" justify="space-between" align="center">
                        <Heading size ="lg" fontWeight="normal">Usuario</Heading>
                       
                    <Link href="/users/create" passHref>
                        <Button as ="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as ={RiAddLine}/>}>
                            Criar novo usuário
                        </Button>
                    </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8" >
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                   <Box>
                                       <Text fontWeight="bold">Gerson Revoredo</Text>
                                       <Text fontWeight="sm" color="gray.300">gerson@hotmail.com</Text>
                                   </Box>
                                </Td>
                                <Td>
                                    04 de Abril 2021
                                </Td>
                                <Td>
                                    <Button as ="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as ={RiEditLine}/>}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
} 