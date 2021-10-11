// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
// import UserContainer from './components/UserContainer';
// import AxiosTest from './components/axiosTest';
//import Login from './components/Login/Login';
//import NewLogin from './components/Login/NewLogin';
import LoginHooks from './components/Login/LoginHooks';



function App() {
  return (
    <Provider store={store}>
     <div className="App">
     <LoginHooks />
    
       {/*
       <NewLogin />
      <Login />
       <AxiosTest />
       <UserContainer />
       <HooksCakeContainer />
       <NewCakeContainer />
       <CakeContainer />
       <IceCreamContainer />
       <ItemContainer cake />
       <ItemContainer />
       */}
     </div>
    </Provider>
  );
}

export default App;
