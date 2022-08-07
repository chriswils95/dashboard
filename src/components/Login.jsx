import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import '../CSS/Login.css';
import im from '../data/design4.JPG';
import FormInput from './form/FormInput';



function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const usernameRef = useRef()
  const passwordRef = useRef()
  const submitBtn = useRef()
  const [passwordError, setPasswordError] = useState("Password is incorrect")
  const [usernameError, setUsernameError] = useState("username is incorrect")
  const navigate = useNavigate ();
  const { setUserLogin, setActiveMenu} = useStateContext();

  const onUsernameChange = () => {
    setUsername(usernameRef.current.value)
    console.log(username);
  }

  const onPasswordChange = () => {
    setPassword(passwordRef.current.value)
    console.log(password);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLogin(true);
    setActiveMenu(true);

    if ((username ==='bitwa') && (password ==='bitwa'))
    {
      navigate("/Ecommerce")
    }
    else
    {
      navigate("/")
    }
    
  }

  useEffect(() => {
    setActiveMenu(false);
  });

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h1 className="App-welcome-title">  Welcome </h1>
          <img className="App-icon" src={im} alt=""/>
          <FormInput placeholder="Username" type="text" refer={usernameRef}
           label="Username" onChange={onUsernameChange} 
           errorMessage={usernameError}/>
          <FormInput placeholder="Password" type="password" refer={passwordRef} 
          label="Password" onChange={onPasswordChange}
          errorMessage={passwordError}/>
          <button className='login-button' onClick={handleSubmit} ref={submitBtn}>Login</button>
        </form>
      </header>
    </div>
  );
}

export default Login;