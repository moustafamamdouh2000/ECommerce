import { useState } from 'react';
import './signup.css';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const submitValues = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
  };
  return (
    <section className="form-wrapper">
      <form className="signup-form">
        UserName
        <input type="text" onChange={onNameChange} />
        Email
        <input type="text" onChange={onEmailChange} />
        Phone
        <input type="text" onChange={onPhoneChange} />
        <button className="btn btn-primary btn-block" onClick={submitValues}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Signup;
