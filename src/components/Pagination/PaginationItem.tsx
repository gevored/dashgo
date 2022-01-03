import { Button } from "@chakra-ui/react";
import {} from 'react'

interface PaginationItemProps {
    isCurrent?:boolean;
    numberPage:number;
}

export function PaginationItem({isCurrent = false, numberPage}:PaginationItemProps){
    if(isCurrent){
        return(
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor:'pink.500',
                    cursor:'default'
                }}
            >
                {numberPage}
            </Button>
        )
    }

    return(
        <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        bg="gray.700"
        _hover={{
            bgColor:'pink.500'
        }}
        >
            {numberPage}
        </Button>
    )

}