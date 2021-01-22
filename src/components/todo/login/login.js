import Login from './components/login';
import LoginContext from './components/context';
import Auth from './components/auth';

const DeleteLink = props => {
  return (
    <Auth capability='delete'>
      <button>delete</button>
    </Auth>
  )
}

function Login() {
  return (
    <div className="App">
      <LoginContext>
        <Login />
        <DeleteLink />
      </LoginContext>
    </div>
  );
}

export default Login;
