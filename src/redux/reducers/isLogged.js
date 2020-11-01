let username=[
    {
    userName:'',
     age:'',
     description:''
    }
]
export default function isLogged(state=username,action){
    switch(action.type){
            case"signIn":
            return action.payload
            case"signOut":
            return state=[]
        default:return state
    }
}