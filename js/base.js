import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCnYipDdOIUb7fyCV2cLe9eQpmVUMjvS0U',
  authDomain: 'homepage-f135a.firebaseapp.com',
  databaseURL: 'https://homepage-f135a.firebaseio.com'
})
const base = Rebase.createClass(app.database())
export default base
