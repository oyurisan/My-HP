import { firestoreAction,vuexfireMutations} from 'vuexfire'
import firebase from '~/plugins/firebase'


const db=firebase.firestore()
const Info=db.collection('CustomerInfo')

export const state=()=>({
  CustomerInfo:[]
})

export const mutations={
  ...vuexfireMutations
}

export const actions={
  init:firestoreAction(({bindFirestoreRef})=>{
    bindFirestoreRef('CustomerInfo',Info)
  }),
  add:firestoreAction((context,{myname,title,age,tel,message})=>{
  // if(myname.trim()){
    Info.add({
     myname,
     title,
     age,
     tel,
    message,
    done:false,
    created: firebase.firestore.FieldValue.serverTimestamp()
    })
  // }
  }),
  toggle:firestoreAction((context,todo)=>{
    Info.doc(todo.id).update({
      done:!todo.done
    })
  })
}

