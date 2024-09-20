import { Button, Image, Text, VStack } from "@chakra-ui/react"

 
export const Card = ({amount, img,checkoutHandler}) => {
    return(
        <>
            <VStack>
                <Image src={img} boxSize={"64"} objectFit="cover"/>
                <Text>Rs.{amount}</Text>
                <Button onClick={()=>checkoutHandler(amount)}>Pay Now</Button>
            </VStack>
        </>
    )
} 