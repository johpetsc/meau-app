import auth from '@react-native-firebase/auth';

const user = auth().currentUser;

const axios = require('axios').default;

export default async function sendMessage(uid) {
  axios({
    method: 'post',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'key=AAAAseowoy4:APA91bErVwsO7inIbJjMZfeaqwu4v585zyY_ktxG0m2tgOlGWjTbiiVei8ptDrx15ADRAaHrzyAm_w1bRnOsuywdZjrU3nEo6N-jnpJqS2SICpYBkTQStzgIAqDsIKgxKy8vjX7SWp_7',
    },
    data: {
      to: '/topics/user_' + user.uid,
      data: {
        title: 'Novo interessado',
        message: 'Há um novo interessado em adotar o seu animal!',
      },
    },
  });
}
