let Reviews=[
    {
        id:1,
        senderName:'Татьяна',
        senderText:'отличный выбор между ценой и качеством',
        date:"29 sep 2020",
        description:'управляю магазином одежды',
        isSeeing:false,
        userid:1,
        age:20,
        img:3
    }, {
        id:1,
        senderName:'Алексей',
        senderText:'мне нравиться данный продукт',
        date:"20 oct 2020",
        description:'работаю в строительной компании',
        isSeeing:false,
        userid:2,
        age:20,
        img:2
    },{
        id:2,
        senderName:'Виктор',
        senderText:'худшая доставка ,ждал 2 месяца',
        date:"15 oct 2020",
        description:"являюсь работником компании Нью-код",
        isSeeing:false,
        userid:3,
        age:25,
        img:1
    },{
        id:3,
        senderName:'Вика',
        senderText:'данный товар мне очень понравился',
        date:"28 sep 2020",
        description:'учусь в московском ...',
        isSeeing:false,
        userid:4,
        age:20,
        img:1
    },{
        id:4,
        senderName:'Настя ',
        senderText:'товар пришел в плохом состоянии  ',
        date:"28 sep 2020",
        description:'Учусь в Челябинске ',
        isSeeing:false,
        userid:5,
        age:20,
        img:3
    },{
        id:5,
        senderName:'Максим',
        senderText:'всё пришло в хорошем состоянии',
        date:"28 sep 2020",
        description:'учусь в колледже',
        isSeeing:false,
        userid:5,
        age:20,
        img:3
    },{
        id:4,
        senderName:'Александр',
        senderText:'мне не возвращают деньги уже второй месяц после просрочки ',
        date:"28 sep 2020",
        description:'международный дипломат',
        isSeeing:false,
        userid:5,
        age:20,
        img:2,
        
    }
    
    
]
export default function AddReviews(state=Reviews,action){
           let prepareArray=[];
            
    switch(action.type){
            case"addReview":
        
            return [...state,{...action.payload}];
            case"seeProfile":
        
            state.forEach(item=>{
            
                
                if(item.id===action.payload.id){
                        prepareArray.push({...item,isSeeing:true})
                        //создаю флаг "isSeeing" когда юзер заходит на стрaницу другого пользывателя
                        //флаг  только для одного элемента в массиве 
                }else{
                        prepareArray.push({...item,isSeeing:false})
                }
                
            })
            
            return prepareArray
            
            
            case"clear":
            ////возвращаю  в первоначальное состояние после выхода их аккаунта
            console.log('clear');
            console.log(state);
            return Reviews;
    
            
        default:return state
    }
}