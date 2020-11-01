import  React  from 'react';
import  ShowOneReview from './showOneReview';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
    





function Review(){

let linkPath=useHistory().location.pathname;
let arrayOfLink=linkPath.split('/')
let id=parseInt(arrayOfLink[arrayOfLink.length-1]);
let ReviewsOfUSers=useSelector(item=>item.Reviews)
let info=ReviewsOfUSers.filter(item=>item.id===id);
//вывод отзывов по айди 
    

return(
    <div>
    
    <div className="wishlist-title">отзывы</div>
    <div className="wishlist-wrapper">
    {info.length<1?<p className="list-product-title">ни одного отзыва о данном товаре не найденно</p>:''}
        {info.map((item,index)=>{
  
      return <ShowOneReview  key={index} data={item}></ShowOneReview>  
        })
}
        

 </div>
    </div>
    )
    
}
        
  
  
export default Review