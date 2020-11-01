let products=[
        {
            id:1, 
            text:'наушники zml-570',
            price:1200,
            isSearching:true,
            howMuch:1,
            inBucket:false,
            inMywishList:false,
            isBuying:false,
            isNew:false,
            inFold:542,
            img:1,
            description:"беспроводные наушники zml-570pro стильные и водонепроницаемые по низкой цене оригинальное качество мы уже 20 лет на рынке радуем наших покупателей только высококачественной продукции"
            
        },
        {
            id:2, 
            text:'iphone12',
            isSearching:true,
            price:1000,
            howMuch:1,
            inBucket:false,
            inMywishList:false,
            isBuying:false,
            isNew:true,
            inFold:726,
            img:2,
            description:"iphone12 сделай  лучший выбор  дизайна и программного  обеспечения а так же это ещё один шаг в сторону конфидециальности данных в сети "
            
        },
     {
            id:3, 
            text:'Туфли женские',
            isSearching:true,
            price:2100,
            howMuch:1,
            inBucket:false,
            inMywishList:false,
            isBuying:false,
            isNew:false,
            inFold:962,
            img:3,
            description:"iphone12 сделай  лучший выбор  дизайна и программного  обеспечения а так же это ещё один шаг в сторону конфедециальности данных в сети "
            },{
            id:4, 
            text:'кроссовки спортивные',
            isSearching:true,
            price:1900,
            howMuch:1,
            inBucket:false,
            inMywishList:false,
            isBuying:false,
            isNew:false,
            inFold:792,
            img:4,
            description:"идеальный выбор для городских дорог и спортзалов одобрено лучшими спортсменами страны так же хороший выбор для обычной прогулки по улице "
            },{
            id:5, 
            text:'мужской костюм',
            isSearching:true,
            price:700,
            howMuch:1,
            inBucket:false,
            inMywishList:false,
            isBuying:false,
            isNew:true,
            inFold:20,
            img:5,
            description:"сочетание элеганстности и классики сделает  вас эпицентром внимания независимо от вашего местанахождения подходит для оффициальных встречь и банкетных вечеров "
            }
    
    ]

 function compare( a, b ) {
                    if ( a.id < b.id ){
                            return -1;
                    }else if ( a.id > b.id ){
                            return 1;
                    }
                            return 0;
                    }
                    //сортирую чтобы продукты не менялись местами при клике


export default function AddOne(state=products,action){
            let oldValue;
            let prepareArray=[]
    switch(action.type){
      case"addOne":
            state.forEach(item=>{
                if(item.id===action.payload){
                    oldValue=item.howMuch
                    //получаю  предидущие количество  продукта
                    prepareArray=[...prepareArray,{...item,howMuch:oldValue+1}];
                    //наполняю пустой массив новыми значениями 
                    
                }else{
                    prepareArray=[...prepareArray,{...item}];
                }
            })
            
            return prepareArray ;
            
      case"delOne":
            state.forEach(item=>{
                if(item.id===action.payload){
                    oldValue=item.howMuch
                    prepareArray=[...prepareArray,{...item,howMuch:oldValue-1}];
                }else{
                    prepareArray=[...prepareArray,{...item}];
                }
            })
            
            return prepareArray ;
            
            
      case"search":
            let textOfBar=action.payload.textOfBar
            let lengthOfSplit=action.payload.lengthOfSplit
            let prepareSearchArray=[]
        
        
        state.map((item,index)=>
        {
                
            let itemName=item.text.substring(0,lengthOfSplit).toLowerCase();
            //сокращаю каждый элемент массива на количество символов в строке  
            
                
                if(itemName===textOfBar && lengthOfSplit>=0){
                    //сравниваю подходит ли вводимый мною текст к тексту каждого элемента массива  
                    prepareSearchArray.push({...item,isSearching:true});
                    //создаю флаг "isSearching" по которому буду выводить  продукты  в список
                }else if(textOfBar.length===0){
                    //при отсутствии значений в поле поиске вывожу все элементы
                    prepareSearchArray.push({...item,isSearching:true});
                
                }
                else{
                    prepareSearchArray.push({...item ,isSearching:false}); 
            }

        })
        
            return prepareSearchArray
            
        case"addToBucket":  
            prepareArray=state.filter(item=>item.id!==action.payload.id);
            //удаляю старый элемент из массива   
            
            prepareArray=[...prepareArray,{...action.payload,inBucket:true}]
            //добавляю новый из диспача   
      
             
             
                prepareArray.sort( compare );
            
               
      
            return prepareArray
            
            
        case"AddToWishList":  
            prepareArray=state.filter(item=>item.id!==action.payload.id);
            
            prepareArray=[...prepareArray,{...action.payload,inMywishList:true}]
            prepareArray.sort(compare);
            return prepareArray
            
        case"Buy":
            state.forEach(item=>{
            
                
                if(item.id===action.payload.id){
                        prepareArray.push({...item,isBuying:true})
                        //флаг "покупка" только для одного элемента в массиве 
                }else{
                        prepareArray.push({...item,isBuying:false})
                        
                }
                
            })
             
            
                prepareArray.sort( compare );
            
            return prepareArray
            
            case"clearProducts":
            //возвращаю  к первоначальное состояние после выхода их аккаунта
            return products;
            
        case "deletFromBucket":
            
            prepareArray=state.filter(item=>item.id!==action.payload.id);
            prepareArray=[...prepareArray,{...action.payload,inBucket:false}]
            prepareArray.sort(compare);
            return prepareArray;
        case"deletFromMyWishList":
            prepareArray=state.filter(item=>item.id!==action.payload.id);
            prepareArray=[...prepareArray,{...action.payload,inMywishList:false}]
            prepareArray.sort(compare);
            
            return prepareArray;
        default:return state
    }
}