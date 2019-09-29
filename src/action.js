import { getMovieList,likeMovie } from "./apis";
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
/*export const clickBookTicket=(movie)=>{
    return (dispatch)=>{
        bookMovie(movie).then()
    }
}*/