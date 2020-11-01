import  React  from 'react';
import {useSelector} from 'react-redux'
import SingleProduct from '../ListOFItem/singleProduct'
import Reviews from './reviews'
import AddReview from './addReview'
import { useHistory } from "react-router-dom";


function SingleItem(){
let Products=useSelector(item=>item.Products)
//получаю данные из редакс стэйта
let linkPath=useHistory().location.pathname;
    
//получаю путь
let arrayOfLink=linkPath.split('/')
//делю ссылку на части по знаку "/"

let id=parseInt(arrayOfLink[arrayOfLink.length-1]);
//получаю последний элемент массива т.е айди текущей страницы по которому буду выводить обзоры на продукт
    
let [info]=Products.filter(item=>item.id===id);
    
    
    
    
return(
    <div>
        
        <SingleProduct data={info} ></SingleProduct>
        <Reviews></Reviews>
        <AddReview></AddReview>
        
  
    


        
    </div>
    )
    
}
        
  
  
export default SingleItem