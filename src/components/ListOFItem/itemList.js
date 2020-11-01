import  React  from 'react';
import SearchBar from './searchForItem'
import SingleProduct from "./singleProduct"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";


function ItemList(){
let dis=useDispatch();

    let linkPath=useHistory().location.pathname;
    //получение раута
    
let itemsFromRedux=useSelector(item=>item.Products.filter(item=>
linkPath==='/'? item.isNew===true : item
));
    //подготавливаю массив для в вывода на экран в зависимости  в каком рауте  находится данный компонент ("/" или "/products")
    
    
    function handleInput(e){
         //обрабатываю систему поиска 
            let textOfBar=e.target.value;
        
            let lengthOfSplit=textOfBar.length
            //получаю количество символов в строке 
        
            dis({type:"search",payload:{
             textOfBar,
            lengthOfSplit,
            }})
            
            
    }

    
    

    
return(
    <div className="list-ofItem-wrapper">
    <SearchBar handleInput={handleInput} ></SearchBar>
        
          
    {
    linkPath==='/'? <p className="wishlist-title">новинки</p>:<p className="wishlist-title">все продукты</p>
    }
        
     <div className="wishlist-wrapper">
         
        {
            itemsFromRedux.map(item=>{
                //вывожу по флагу "isSearch" "isNew"  и по месту в каком рауте  находится данный компонент ("/home" или "/products")
                
                return item.isSearching ? <SingleProduct key={item.id} data={item} ></SingleProduct>:''
                    
                
                    
            })
        }
     </div>    
        

        
    </div>
    )
    
}
        
  
  
export default ItemList;