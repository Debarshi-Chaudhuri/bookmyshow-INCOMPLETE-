const initialState={
    movies:[],
    bclick:false
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'MOVIE_LIST':
            return{
                ...state,
                movies:action.payload,
                bclick:true
            }
        default:return state;
    }
}