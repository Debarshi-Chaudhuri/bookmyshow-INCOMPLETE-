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
            resolve(items);
            reject([]);
        }
    )
})
export const likeMovie=(movie)=>new Promise(function(resolve,reject){
    const db=firebase.firestore();
    let items=[];
    db.collection(`${movie.collection}`).doc(`${movie.document}`).set(
        {likes:movie.likes+1},{merge:true}
    ).then(
        db.collection(`${movie.collection}`).get().then(
            (query)=>{
                query.forEach(
                    (item)=>{
                        items.push(item.data())
                    }
                )
                resolve(items);
                reject([]);
            }
        )  
    )
})
export const bookMovie=(email)=>new Promise(function(resolve,reject){
    const auth=firebase.auth();
    auth.createUserWithEmailAndPassword(`${email}`,'123456').then(
        (data)=>{
            console.log(data)
            data.user.sendEmailVerification();
            data.user.delete()
        }
    ).catch((error)=>alert('error'))
})