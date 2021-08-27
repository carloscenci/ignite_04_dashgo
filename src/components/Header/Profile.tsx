import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Carlos Cenci</Text>
                    <Text color="gray.300" fontSize="small">carlosc.estevam@gmail.com</Text>
                </Box>
            ) }

            <Avatar size="md" name="Carlos Cenci" src="https://avatars.githubusercontent.com/u/61289109?v=4" />
        </Flex>
    )
}