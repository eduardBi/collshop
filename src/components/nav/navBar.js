import  React  from 'react';
import BucketCounter from "./bucketCounter"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";






function NavBar(){
    
let userName=useSelector(item=>item.isLogged.userName);

    
function showMobile(){
        document.querySelector('body').classList.toggle('mobile');
    }
return(
<div className="nav-wrapper">

    <nav className="nav-bar" >
     
          <Link     
                    className="nav-logo logo-font"                   
                    onClick={showMobile}
                    to="/">
                        cool<br/> brand
            </Link>
             
               
           <div className="nav-list">
              <Link 
                 
                  onClick={showMobile}
                  className="nav-link-item" 
                  to="/products">
                    все товары
            </Link>
            <Link 
                 
                  onClick={showMobile}
                  className="nav-link-item" 
                  to="/">
                    главная
            </Link>
            
            <Link 
              
              onClick={showMobile}
               className="nav-link-item" 
               to={userName? "/bucket" :'/login'}
               ><BucketCounter></BucketCounter>   
            </Link>
              
               {userName?
               <Link 
                  
                  onClick={showMobile}
                   className="nav-link-item" 
                   to={userName? "/myProfile" :'/login'}
               >мой профиль
               
            </Link>
                   :''
             }
              <Link 
                  
                  onClick={showMobile}
                   className="nav-link-item" to='/login'>
                    {userName? "выход":'регистрация'}
            </Link>
           </div>
               
    </nav>
</div>  
    )
    
}
        
  
  
export default NavBar