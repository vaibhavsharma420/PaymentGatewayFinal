import { Box, Stack } from "@chakra-ui/react";
import { Card } from "./Card";
import axios from "axios";

export const Home = () => {

    const checkoutHandler = async (amount) =>{

        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey");
        const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })
        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "First India+",
            description: "Test Transaction",
            image: "./Img.png",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc" 
            }
        };
        const razor = new window.Razorpay(options);
            razor.open()
    }

    return(
        <>
            <Box>
                <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column","row"]}>

                    <Card amount={1000} img={"./Img.png"} checkoutHandler={checkoutHandler}/>
                    <Card amount={1000} img={"./Img.png"} checkoutHandler={checkoutHandler}/>
                </Stack>
            </Box>
        </>
    )
}   