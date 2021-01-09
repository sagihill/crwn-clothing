import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBftsUn0qSG7Y7Sp4x6yD8D9TWUfpBOan4",
	authDomain: "crwn-clothing-a75ef.firebaseapp.com",
	projectId: "crwn-clothing-a75ef",
	storageBucket: "crwn-clothing-a75ef.appspot.com",
	messagingSenderId: "500705134465",
	appId: "1:500705134465:web:73e6bb270f3bd527634a80",
	measurementId: "G-X4K9SM4129",
};

export const createUserProfileDoc = async (userAuth, data) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...data,
			});
		} catch (e) {
			console.log(`error creating user: ${e}`);
        }
	}
    return userRef
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
