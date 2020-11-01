import  React ,{  useEffect} from 'react';
import {useSelector} from 'react-redux'


function BucketCounter(){
    
    let BucketItems=useSelector(item=>item.Products);
    BucketItems=BucketItems.filter(item=>item.inBucket!==false).length
    let number;
    useEffect(()=>{
               
    if(BucketItems===0){
         number=''
    }else{
        number=BucketItems
    }
        
    })
    //ставлю количество предметов в корзине
    
    
return(
    <div>
            
               bucket: {BucketItems}
               
    </div>
    )
    
}
        
  
  
export default BucketCounter