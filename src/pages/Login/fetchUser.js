import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default async function fetchUser(uid) {
  const userDocument = await firestore()
    .collection('usuarios')
    .doc(uid)
    .get()
    .then((documentSnapshot) => {
      return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
  try {
    if (userDocument.imageRef) {
      console.log(userDocument.imageRef);
      const url = await storage().ref(userDocument.imageRef).getDownloadURL();
      userDocument.imageRef = url;
    }
  } catch (e) {
    console.log(e);
  }
  return userDocument;
}
