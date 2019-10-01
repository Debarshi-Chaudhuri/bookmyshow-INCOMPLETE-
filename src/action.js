import { getMovieList,likeMovie,bookMovie } from "./apis";
export const genreClick=(genre)=>{
    return(dispatch)=>{
        getMovieList(genre).then(
            (items)=>dispatch({type:'MOVIE_LIST',payload:items})
        )
    }
}
export const likeClick=(movie)=>{
    return (dispatch)=>{
        likeMovie(movie).then(
            (items)=>dispatch({type:'MOVIE_LIST',payload:items})
        )
    }
}
export const clickBookTicket=(email)=>{
    return (dispatch)=>{
        bookMovie(email)
    }
}