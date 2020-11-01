import  React  from 'react';
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom";





function Review(props){
    
    let item=props.data;
    let dis=useDispatch();
   
    function goToProfile(data){
        
        dis({type:"seeProfile",payload:data});
        //по клику отправляю на установку флага "isSeeing"
        
    }
    
    
    
    
    
    
    
return(
    <div>
     
        
            
         <div className="user-profile-wrapper">
           <div className="user-wrapper">
               <img 
                   className="user-pic"
                    src={require(`../img/userimg/${item.img}.png`).default}

                   />

                <div className="user-info">
                      <div className="user-info-item">отправлено:{item.date}</div>
                    <div className="user-info-item">о товаре :{item.senderText}
                    </div>
                    <div className="user-info-item">пользыватель:{item.senderName}</div>
                      <Link 
                              to={item.userid===11?( '/myprofile'):(item.userid?  `/users/${item.userid}` :'/login')  
             } 
          //проверка  для переадресации если "обзор оставил пользыватель"отправить на "профильную страницу" если коментарий другого пользывателя перенаправить  в личный профиль
                              onClick={()=>goToProfile(item)} 
                              className="user-info-item short-btn"
                              >просмотреть профиль
                      </Link>

            </div>
         </div>    
      
  </div>
     
     
       
        

        

        
        
    </div>
    )
    
}
        
  
  
export default Review