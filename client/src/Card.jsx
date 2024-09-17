import { Button, Image, Text, VStack } from "@chakra-ui/react"
import Form from "./Form"

 
export const Card = ({amount, img,checkoutHandler}) => {
    return(
        <>
            <VStack>
                <Image src="./Img.png"/>
                <Text>Rs.{amount}</Text>
                <Button onClick={()=>checkoutHandler(amount)}>Pay Now</Button>
            </VStack>
        </>
    )
} 