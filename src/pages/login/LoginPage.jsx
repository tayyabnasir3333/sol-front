import React, { useState } from "react";
import "./LoginPage.css";
import { useLogin } from "../../hooks/useAuth";

export const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const { mutate, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='position-box-login'>
      <div className='login-container '>
        <div className=' pb-3 d-flex flex-column align-items-center '>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              name='email'
              onChange={onChange}
              type='email'
              placeholder='Email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              name='password'
              onChange={onChange}
              type='password'
              placeholder='Password'
              required
            />
          </div>
          <div className='form-group'>
            <button disabled={isLoading} type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
