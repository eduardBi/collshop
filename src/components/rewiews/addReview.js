import  React ,{useState } from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";




function Review(){
let dis=useDispatch();
    
let   [review,setReview]=useState([]);    
    //обрабатываю ввод
let linkPath=useHistory().location.pathname;
let arrayOfLink=linkPath.split('/');
let id=parseInt(arrayOfLink[arrayOfLink.length-1]);
    //к какому посту пользыватель пишет отзыв 
let name=useSelector(item=>item.isLogged.userName);
let userId=useSelector(item=>item.isLogged.id);
let age=useSelector(item=>item.isLogged.age);
let date=new Date;
    
    
let handlleSubmit=(e)=>{
    //добавляю отзыв
    e.preventDefault();
    dis({type:'addReview',payload:{
        senderName:name,
        senderText:review.senderText,
        age:age,
        id:id,
        img:3,
        userid:userId,
        date:date.getDate()+'nov 2020'

    }})
    
    document.querySelector('textarea').value=''
    setReview('')
    
}


    
let handleChange=(e)=>{
    
    
    
    setReview({...review,[e.target.name]:e.target.value});
    
}
    
    
return(
        <div>
            
    
        {name?  
            <form 
                className="review-form" 
                onSubmit={handlleSubmit}
            >
            
            <textarea   
                value={review.senderText}     
                name="senderText" 
                onChange={handleChange} 
                type="text"
            />
            
        <button 
            type='submit'
        >отправить отзыв
        </button>
        
    </form>
                            :
    
    
        <Link  
            className="btn"
            to="/login"
        >зарегистрируйтесь чтобы оставлять отзывы</Link>   }                 
    
        </div> 
    )
    
}
        
  
  
export default Review