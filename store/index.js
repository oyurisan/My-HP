// import { vuexfireMutations } from "vuexfire";
import { firestoreAction, vuexfireMutations} from 'vuexfire'
import firebase from '~/plugins/firebase'


const db=firebase.firestore()
const BlogRef=db.collection('Blog')

export const state =()=>({
  Blog:[],
  aaa:'ゆり'
})

export const mutations={
  ...vuexfireMutations
}

export const actions={
  init:firestoreAction(({bindFirestoreRef})=>{
    bindFirestoreRef('Blog',BlogRef)
}),
add:firestoreAction((context,{message,username,title,date})=>{
  BlogRef.add({
    username,
    message,
    title,
    date,
    // merumaga
  })
}),
// get:firestoreAction((context,{username,message,title,date})=>{
//   BlogRef.get({
//     username,
//     message,
//     title,
//     date,
//   })
// })
delete:firestoreAction((context,id)=>{
  BlogRef.doc(id).delete()
})
}



// export const mutations={
//   ...vuexfireMutations
// }

