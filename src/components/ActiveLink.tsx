import Link ,{LinkProps} from "next/link"
import { useRouter } from "next/router"
import { cloneElement , ReactElement, } from "react"


/*if your component just accept a React component, you have to use a ReactElement,
 if your component accept beyond a Component React but also any other node you can use ReactNode
*/ 

interface ActiveLinkProps extends LinkProps{
    children:ReactElement;
}

export function ActiveLink({children,...rest}: ActiveLinkProps){

    const {asPath}  = useRouter()

    const isActive = rest.href === asPath ? true :false


    return(
        <Link {...rest}>
            {cloneElement(children,{
                color:isActive ? 'pink.400': 'gray50' 
            })}
        </Link>
    )
}