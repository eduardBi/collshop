import  React  from 'react';




function SearchForItem(props){
    
    
   let handleInput=props.handleInput;
    
return(
    <div className="search-bar">
        
          
         <input 
            placeholder="поиск по названию товара"
            className="search-bar"
            type="text" 
            onChange={handleInput}/
    >      


        
    </div>
    )
    
}
        
  
  
export default SearchForItem;
