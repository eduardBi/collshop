import  React  from 'react';
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";




function SingleProfile(){
 
let [ReviewsOfUSers]=useSelector(item=>item.Reviews).filter(item=>item.isSeeing===true);
    //вывожу информацию о пользователе по флагу "isSeeing" 
    //единственнный флаг на массив пользователей
    
return(

    <div className="my-wrapper">
        
            <img 
               className="user-pic"
                src={require(`../img/userimg/${ReviewsOfUSers.img}.png`).default}
               />
    
            <div className="my-user-info">
                <div className="my-info-item">имя пользывателя:{ReviewsOfUSers.senderName}</div>
                <div className="my-info-item">возраст:{ReviewsOfUSers.age}</div>
                <div className="my-info-item">о себе:{ReviewsOfUSers.description}

                </div>
            </div>
    
    
    </div>
    )
    
}
        
  
  
export default SingleProfile