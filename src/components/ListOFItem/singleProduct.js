import  React ,{useState , useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import Img from '../img/1.jpg'


function SingleProduct(props){
    
    
let data= props.data;
let dis=useDispatch();
let linkPath=useHistory().location.pathname.trim();
let [disable,setDisable]=useState(false);
let wishListInitial=useSelector(item=>(item.Products[data.id-1].inMywishList));
let bucketListInitial=useSelector(item=>(item.Products[data.id-1].inBucket));
    
let [inBucketSwitch,setInBucketSwitch]=useState(bucketListInitial);
let [inWishListSwitch,setInWishListSwitch]=useState(wishListInitial);
    
    
useEffect(()=>{
    
    
   
        
},[])
    //проверяю выводить ли кнопку" в корзину" когда пользыватель уже в корзине

useEffect(()=>{
   
    if(data.howMuch<2){
        setDisable(true)
        
    }else{
        setDisable(false)
        
    }
        
});
    //
    




function deletFromBucket (data){
    if(isLogged){
        dis({type:'deletFromBucket',payload:data})
        setInBucketSwitch(!inBucketSwitch);
 }
}
    
    function AddtoBucket(data){
         if(isLogged){
             //проверка зарегестрировался ли пользыватель 
        dis({type:'addToBucket',payload:data})
         }
        setInBucketSwitch(!inBucketSwitch);
    }
    
    function AddOne(id){
        //добавить одну штуку
        dis({type:"addOne",payload:id});
            
    } 
    function delOne(id){
        dis({type:"delOne",payload:id})
    }
    
    function toMyWishList(data){
        if(isLogged){
                
                dis({type:"AddToWishList",payload:data});
            setInWishListSwitch(!inWishListSwitch);
        
        }
    }
    
    function deletFromMyWishList(data){
        if(isLogged){
            dis({type:"deletFromMyWishList",payload:data});
            setInWishListSwitch(!inWishListSwitch);
            
        }
        
    }
    
    function BuyItem(data){
        if(isLogged){
            
        dis({type:"Buy",payload:data});
        }
        
    }
    
    
    let isLogged=useSelector(item=>item.isLogged.userName);
    
    
return(
    
    <div className='list-product-item'>
         <p className="list-product-title" >
             {data.text}
         </p>
      <div className="list-product-info">
          
         <img
         src={require(`../img/${data.img}.jpg`).default}
          
         className="list-product-img"  
         />
           <div className="list-product-counter">
             
                 <button 
                     disabled={disable}
                    className="list-counter-item left-rounded-border" 
                     onClick={()=>delOne(data.id)} 
                     
                     >-
                 </button>
          

                 <div
                   className="list-counter-item"
                    >
                     {data.howMuch}
                 </div>
         
                 <button
                     className="list-counter-item right-rounded-border"
                      onClick={()=>AddOne(data.id)}
                      >+
                  </button>
           </div>
         <div className="list-product-description">
             {data.description}
         </div>
            <div className="list-product-prices">
                
               <div className="list-product-price">
                     цена за 1шт:{data.price}
               </div>
                <div className="list-product-price">
                     в общем:{data.price*data.howMuch}
               </div>
            </div>    
               <div className="list-product-price" >
                     доступно в наличии:{data.inFold}
               </div>
        </div>  
      <div className="list-product-action">
          
         <Link 
            className="list-action-item"
             to={`/product/${data.id}`}
             >просмотреть описание
        </Link>
        
         
    {!inBucketSwitch? <Link 
                    className="list-action-item"
                    onClick={()=>AddtoBucket(data)} 
                    to={isLogged? linkPath :'/login'}  
             >добавить в корзину
         </Link>  :  <Link 
                    className="list-action-item"
                    onClick={()=>deletFromBucket(data)} 
                   to={isLogged? linkPath :'/login'}   
             >удалить из корзины
         </Link> 
              
    }


       
        
          { !inWishListSwitch?
         <Link 
            className="list-action-item"
            to={isLogged? linkPath :'/login'}   
             onClick={()=>toMyWishList(data)}
        >добавить в лист для желаний
        </Link>
             :
          
          <Link 
            className="list-action-item"
             to={isLogged? linkPath :'/login'}   
             onClick={()=>deletFromMyWishList(data)}
        >удалить из листа для желаний
        </Link>
             }
        
         <Link 
            className="list-action-item"
             to={isLogged? "/buyitem":"/login" }  
             onClick={()=>BuyItem(data)}
             >купить
         </Link>
      </div>           
         
         

        
    </div>
    )
    
}
        
  
  
export default SingleProduct;
