import {StackNavigator} from 'react-navigation';
import CreateAcc from '../Scenes/CreateAcc';
import Login from '../Scenes/Login';
import LoginPage from '../Scenes/LoginPage';

 export default StackNavigator({
  LoginPage: { screen: LoginPage },
  Create: { screen: CreateAcc },
  Log: { screen: Login}
  });