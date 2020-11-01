import  React from 'react';
import {useSelector} from 'react-redux'
import SingleProduct from '../ListOFItem/singleProduct'





function Bucket(){
    
    
    
let  bucketData= useSelector(item=>item.Products)



bucketData=bucketData.filter(item=>item.inBucket!==false);
    //получаю элементы с флагом "в корзине

    
return(
    <div className="bucket-bg">
    
   
              <p className="wishlist-title">корзина</p>
        <div className="wishlist-wrapper">
            
        {bucketData.map(item=>{
            
          return <SingleProduct key={item.id} data={item}></SingleProduct>
        })
        }
           {bucketData.length<1? <p className="list-product-title"> в корзине ничего не найденно </p>:'' 
            }
        
     </div>
    </div>
    )
    
}
        
  
  
export default Bucket