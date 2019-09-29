import { getMovieList } from "./apis";
export const genreClick=(genre)=>{
    return(dispatch)=>{
        getMovieList(genre).then(
            (items)=>{
                return dispatch({type:'MOVIE_LIST',payload:items})
            }
        )
    }
}