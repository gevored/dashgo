import { Box, Flex, Text,Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileDate?:boolean;
}
export function Profile({showProfileDate =true}: ProfileProps){
    return(
        <Flex
        align="center"
    >
        {showProfileDate && 
        (
            <Box mr ="4" textAlign="right" >
                <Text>Gerson</Text>
                <Text color = "gray.300" fontSize="small">gersonrevoredo@hotmail.com</Text>
            </Box>
        )
        }
        <Avatar size="md" name ="Gerson Revoredo" src = "https://avatars.githubusercontent.com/u/14332784?v=4"/>
    </Flex>
    )
}