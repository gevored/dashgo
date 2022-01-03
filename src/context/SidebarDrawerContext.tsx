import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebarDrawerProviderProps{
    children:ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}:SidebarDrawerProviderProps){
    
    const router = useRouter()

    
    const  discluse = useDisclosure()

    //every time the url change it will close de navigationbar
    useEffect(() => {
       discluse.onClose()
    }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider value={discluse}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)