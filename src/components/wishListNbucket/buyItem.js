import  React ,{useState } from 'react';
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import SingleProduct from '../ListOFItem/singleProduct'


function BuyItem(){
    
    
    
let  [ItemToBuy]= useSelector(item=>item.Products).filter(item=>item.isBuying===true)

//получаю покупаемый продукт 



const [isbought,setBuy]=useState(false);


    
return(
    <div>
             
        {!isbought? <SingleProduct data={ItemToBuy} ></SingleProduct>   
                : <p className='big-msg'>спасибо за покупку</p>
        //вывожу информацию о продукте или сообщение об успешном совершении покупки
        }
        
        {!isbought?
        <button 
            className="btn"
           onClick={()=>setBuy(true)}
           >buy
        </button>:''
            
        }
        {
            //тригер сообщения об успешной покупке
        }
        
        <Link 
            to='/bucket'
            className="btn"
            >вернуться к корзине
        </Link>
        <Link 
            to='/products'
            className="btn"
            >посмотреть все продукты 
        </Link>
    </div>
    )
    
}
        
  
  
export default BuyItem