import firebase from "./firebase.js";
export const getMovieList=(genre)=>new Promise(function(resolve,reject){
    const db=firebase.firestore();
    let items=[];
    db.collection(`${genre}`).get().then(
        (query)=>{
            query.forEach(
                (item)=>{
                    items.push(item.data())
                }
            )
            resolve(items)
        }
    )
})