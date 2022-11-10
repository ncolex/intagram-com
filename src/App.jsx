import './App.css'
import { Index } from './components/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreContext from './components/Context/UserContextStore';
import { useState } from 'react';
import Dashboard from './components/Dashboard/dashboard';
import ProtectedRoute from './components/Common/ProtectedRoute/protectedRoute';
import PasswordReset from './components/PasswordReset/password_reset';
import SignUp from './components/Signup/SignUp';
import SignupLogin from './components/Signup/signupLogin';

function App() {

  const [email, setEmail] = useState("")
  const [newuserEmail, setnewuserEmail] = useState()
  const [password, setPassword] = useState("")
  const [fullname, setFullName] = useState()
  const [username, setUserName] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<StoreContext.Provider value={{ email, setEmail, password, setPassword }}><Index /></StoreContext.Provider>} />
            <Route path='dashboard' element={<StoreContext.Provider value={{ email, username }}><ProtectedRoute email={email}><Dashboard /></ProtectedRoute></StoreContext.Provider>} />
            <Route path='accounts/password/reset/' element={<StoreContext.Provider value={{ email, setEmail }}><PasswordReset /></StoreContext.Provider>} />
            <Route path='accounts/emailsignup/' element={<StoreContext.Provider value={{ newuserEmail, setnewuserEmail, fullname, setFullName, username, setUserName, password, setPassword }}><SignUp /></StoreContext.Provider>} />
            <Route path='accounts/login/' element={<StoreContext.Provider value={{ email, setEmail, password, setPassword }}><SignupLogin /></StoreContext.Provider>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
