import { Flex ,Icon,IconButton,useBreakpointValue}from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'


export function Header (){

    const {onOpen} = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true
    })
    return(
        <Flex
            as = "header"
            width="100%"
            maxWidth={1480}
            h="20"
            marginX = "auto"
            mt="4"
            align="center"
            px="6"
        >

            {!isWideVersion &&(
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as ={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                    
                </IconButton>
            )}
            
            <Logo/>

            <SearchBox/>

            <Flex
                align="center"
                ml="auto"
            >
               <NotificationNav/>
               <Profile showProfileDate = {isWideVersion}/>
            </Flex>
        </Flex>
    )
}