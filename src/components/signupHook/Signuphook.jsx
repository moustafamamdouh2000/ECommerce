import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './signupHook.css';
import * as yup from 'yup';

const schema = yup
  .object({
    Password: yup
      .string()
      .required('Password is required')
      .min(8, 'must be at least 8 character long')
      .matches(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
        'password must contain 1 Lower Case 1 Upper Case 1 number and 1 special character'
      ),
    UserName: yup.string().required('User Name is required'),
    Phone: yup
      .string()
      .required('Phone number is required')
      .matches('^[0-9]+$', 'Phone number is not valid')
      .min(11, 'must be at least 11 number')
      .max(11, "can't be more than 11 number"),
    Email: yup
      .string()
      .required('Email is required')
      .email('Not valid email must contain [@ and .]'),
    PasswordConfirm: yup
      .string()
      .required('confirm password is required')
      .oneOf([yup.ref('Password'), 'Passwords do not match'], 'Passwords do not match'),
    Gender: yup.string().required('Please select your gender'),
  })
  .required();
const handleSubmitt = () => {
  //call backend 
}
function Signuphook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const submitValues = (data) => console.log(data);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(submitValues)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              {...register('UserName')}
            />
            <p className="text-danger">{errors?.UserName?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              {...register('Email')}
            />
            <p className="text-danger">{errors?.Email?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              {...register('Password')}
            />
            <p className="text-danger">{errors?.Password?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Password Confirm</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password Confirm"
              {...register('PasswordConfirm')}
            />
          </div>
          <p className="text-danger">{errors?.PasswordConfirm?.message}</p>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="Phone"
              {...register('Phone')}
            />
            <p className="text-danger">{errors?.Phone?.message}</p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    // <section className="form-wrapper">
    //   <form className="signup-form" onSubmit={handleSubmit(submitValues)}>
    //     Username
    //     <input type="text" {...register('UserName')} />
    //     <p className="text-danger">{errors?.UserName?.message}</p>
    //     Email
    //     <input type="text" {...register('Email')} />
    //     <p className="text-danger">{errors?.Email?.message}</p>
    //     Password
    //     <input type="password" {...register('Password')} />
    //     <p className="text-danger">{errors?.Password?.message}</p>
    //     Confirm Password
    //     <input type="password" {...register('PasswordConfirm')} />
    //     <p className="text-danger">{errors?.PasswordConfirm?.message}</p>
    //     Phone
    //     <input type="text" {...register('Phone')} />
    //     <p className="text-danger">{errors?.Phone?.message}</p>
    //     <select {...register('Gender')} className="form-select mb-3">
    //       <option selected disabled>
    //         Select your Gender
    //       </option>
    //       <option value="Male">Male</option>
    //       <option value="Female">Female</option>
    //     </select>
    //     <button className="btn btn-primary btn-block">Submit</button>
    //   </form>
    // </section>
  );
}

export default Signuphook;
