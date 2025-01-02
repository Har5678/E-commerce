import React, {useContext} from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useEffect } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import {useSearchParams} from "react-router-dom"

const Verify = () => {
    const {navigate,setCartItems,token}=useContext(Shopcontext)
    const [searchParams,setSearchParams]=useSearchParams();

    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId");

    const verifyPayment= async ()=>{
        try {
            if(!token){
                return null;
            }

            const response=await axios.post("http://localhost:4000"+"/api/order/verifyStripe",{success,orderId},{headers:{token}});
            if(response.data.success){
                setCartItems({})
                navigate("/orders")
                toast.success("Payment successfull!");
            }else{
                navigate("/cart");
            }
            
        } catch (error) {

            console.log(error);
            toast.error(error.message);
            
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[token])
  return (

    <div>
        
    </div>
  )
}

export default Verify