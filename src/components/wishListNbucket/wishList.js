import  React  from 'react';
import SingleProduct from '../ListOFItem/singleProduct'
import {useSelector} from 'react-redux'

//import WishList from "./components/wishListNbucket/wishList"
//import Bucket from "./components/wishListNbucket/bucket"

function WishList(){
    
    
    let  wishListData= useSelector(item=>item.Products);
    
wishListData=wishListData.filter(item=>item.inMywishList!==false);
    //получаю элементы с флагом "в корзине

    
return(
    <div className="wishList-bg" >
           
     
        
              <p className="wishlist-title">лист желаний</p>
          <div className="wishlist-wrapper">
         {wishListData.map(item=>{
            
          return <SingleProduct key={item.id} data={item}></SingleProduct>
        })
        }
            {wishListData.length<1? <p className="list-product-title">ничего не найденно в  листе желаний</p>:'' 
            }
        
            </div>
    </div>
    )
    
}
        
  
  
export default WishList
