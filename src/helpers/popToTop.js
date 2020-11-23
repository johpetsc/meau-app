import {StackActions} from '@react-navigation/native';

export default function popToTop(navigation) {
  navigation.dispatch(StackActions.popToTop());
}
