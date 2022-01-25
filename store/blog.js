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
    return bindFirestoreRef('Blog',BlogRef)
}),
add:firestoreAction((context,{message,username,title,date,good})=>{
   if(username.trim()){
  BlogRef.add({
    username,
    message,
    title,
    date,
    // count,
    good
  })
}
}),
goodcount:firestoreAction((context,id)=>{
  BlogRef.doc(id).update({
    good:this.iine++
  })
}),
delete:firestoreAction((context,id)=>{
  BlogRef.doc(id).delete()
})
}

