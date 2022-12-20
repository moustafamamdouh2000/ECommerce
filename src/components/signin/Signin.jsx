import { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const onNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const onEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onPhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };
  const submitValues = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
  };
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
