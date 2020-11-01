
import  React  from 'react';

function showMobile(){
        document.querySelector('body').classList.toggle('mobile');
    }


function Burger (){
    return( <div          
              onClick={showMobile}
              className="burger"
          >
           <div className="burger-item"></div>
           <div className="burger-item"></div>
           <div className="burger-item"></div>
           </div>
    )
}


export default Burger;