import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBye_gNSfemw0vruGGnBvJNo2FasFSLJ_4',
	authDomain: 'disneyplus-clone-3bb81.firebaseapp.com',
	projectId: 'disneyplus-clone-3bb81',
	storageBucket: 'disneyplus-clone-3bb81.appspot.com',
	messagingSenderId: '202584589991',
	appId: '1:202584589991:web:2e081527e72d18a4857d82',
	measurementId: 'G-RE3HHZ6LDJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
