import React, { useContext,useState,useEffect } from 'react'
import  {Shopcontext}  from '../context/Shopcontext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {

    const {products}=useContext(Shopcontext);
    
    const [latestProducts,setLatestProducts] = useState([]);


    useEffect(()=>{
       
        setLatestProducts(products.slice(0,10));
    },[products]);

    

   

  return (
    
    <div className='my-10'>
        
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className='w-3/4 m-auto text-ws sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab ullam nisi eius dicta consectetur consequuntur ducimus obcaecati aut aspernatur officiis alias possimus mollitia, quam exercitationem animi ipsum culpa. Dignissimos!
            </p>
        </div>

        {/* rendering products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            
                {latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))}
            
        </div>

    </div>
  )
}

export default LatestCollection