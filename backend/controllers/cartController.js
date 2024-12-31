import userModel from "../models/userModel.js";


const addToCart= async (req,res)=>{
    try {
        const {userId,ItemId,size}=req.body;
        const userData=await userModel.findById(userId);
        let cartData=await userData.cartData;

        if(cartData[ItemId]){
            if(cartData[ItemId][size]){
                cartData[ItemId][size]++;
            }else{
                cartData[ItemId][size]=1;
            }
        }else{
            cartData[ItemId]={};
            cartData[ItemId][size]=1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});
        
        res.json({success:true, message:"Product added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, error: error.message})   
    }
}



const updateCart= async (req,res)=>{
    try {
        const {userId, itemId,size,quantity}=req.body;

        const userData=await userModel.findById(userId);
        let cartData=userData.cartData;
        cartData[itemId][size]=quantity;

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true, message:"Cart updated"});

    } catch (error) {
        console.log(error);
        res.json({success: false, error: error.message})
    }
}


const getUserCart= async (req,res)=>{
    try {
        console.log(req.body.userId);
        
        const {userId}=req.body;
        const userData=await userModel.findById(userId);
        let cartData=userData.cartData;

        res.json({success:true, cartData});
    } catch (error) {
        console.log(error);
        res.json({success: false, error: error.message})
        
    }
}


export {addToCart, updateCart, getUserCart}