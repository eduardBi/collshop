import  React  from 'react';
import {useSelector} from 'react-redux'
import WishList from "../wishListNbucket/wishList"


function MyProfile(){
 
let personalInfo=useSelector(item=>item.isLogged);
    //получаю данные  авторизации
    
return(
    <div>
        <div className="my-wrapper">
        
            <img 
               className="user-pic"
                src={require(`../img/userimg/${personalInfo.img}.png`).defalt}
               />
    
            <div className="my-user-info">
                <div className="my-info-item">имя:{personalInfo.userName}</div>
                <div className="my-info-item">возраст:{personalInfo.age}</div>
                <div className="my-info-item">о себе:{personalInfo.description}

                </div>
            </div>
      </div>
    <WishList></WishList>
    
</div> 
    )
    
}
        
  
  
export default MyProfile