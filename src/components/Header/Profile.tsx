import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text> Vinicius Medeiros </Text>
                    <Text color="gray.300" fontSize="small"> 
                    Vinicius.medeiros@bora.com 
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Vinicius Medeiros" src="https://github.com/ViniciusMdeiros.png" />
        </Flex>
    )
}