import { Header } from "@/src/components/Header";
import { Pagination } from "@/src/components/Pagination";
import { Sidebar } from "@/src/components/SideBar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";
import { useUsers } from "@/src/services/hooks/useUsers";


export default function UserList() {

    const { data, isLoading, isFetching, error } = useUsers();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon
                                    as={RiAddLine} fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text> Falha ao carregar os usuarios</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px="6" color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>
                                            Usuário
                                        </Th>
                                        {isWideVersion &&
                                            <Th>
                                                Data de cadastro
                                            </Th>
                                        }
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.map(user => {
                                        return (
                                            <Tr>
                                                <Td px={["4", "6", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold"> {user.name} </Text>
                                                        <Text fontSize="sm" color="gray.300"> {user.email} </Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion &&
                                                    <Td> {user.createdAt} </Td>
                                                }

                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>

                            <Pagination
                                totalCountOfRegisters={200}
                                currentPage={5}
                                onPageChange={() => { }}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}