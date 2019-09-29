import { getMovieList } from "./apis";
export const genreClick=(genre)=>{
    return(dispatch)=>{
        getMovieList(genre).then(
            (items)=>dispatch({type:'MOVIE_LIST',payload:items})
        )
    }
}