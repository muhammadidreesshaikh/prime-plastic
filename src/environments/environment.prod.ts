import { firebaseKeys } from '../../keys';

export const environment = {
  production: true,
  firebase: {
    apiKey: firebaseKeys.apiKey,
    authDomain: firebaseKeys.authDomain,
    projectId: firebaseKeys.projectId,
    storageBucket: firebaseKeys.storageBucket,
    messagingSenderId: firebaseKeys.messagingSenderId,
    appId: firebaseKeys.appId,
    measurementId: firebaseKeys.measurementId,
  }
};
