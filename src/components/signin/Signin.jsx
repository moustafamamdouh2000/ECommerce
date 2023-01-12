import { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
const schema = yup
  .object({
    Email: yup
      .string()
      .required('Email is required')
      .email('Not valid email must contain [@ and .]'),
    Password: yup.string().required('Password is required')
  })
  .required();

function Signin() {
  const dispatch = useDispatch();
  let loginStatus = useSelector(state => state.userReducer)
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const submitValues = async (data) => {
    const { Email, Password, } = data
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('logged in succesfuly')
        dispatch(login());
        // const serializedState = JSON.stringify(loginStatus.Status)
        localStorage.setItem('loggedIn?', 'true')
        navigate('../home', loginStatus.Status)
      })
      .catch((error) => {
        alert('incorrect information')
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return (
    <div className="form-container">
      <form className="Auth-form" onSubmit={handleSubmit(submitValues)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label className='login-text'>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              {...register('Email')}
            />
            <p className="text-danger">{errors?.Email?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label className='login-text'>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              {...register('Password')}
            />
            <p className="text-danger">{errors?.Password?.message}</p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            New here? <Link to='/register'>Register now</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Signin;
