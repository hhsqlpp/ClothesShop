import { useState } from "react";
import { getMeAction } from "../store/actions/auth";
import { useDispatch } from "react-redux";

export default function Register() {
  let dispatch = useDispatch();

  let [registerForm, setRegisterForm] = useState({});

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      method: "POST",
      body: JSON.stringify(registerForm),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:1717/signin", request)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("x-token", data.token);
          alert("Вы зарегистрировались");
          window.location.href = "/";
        } else {
          alert("Произошла ошибка");
        }
      });
  };

  return (
    <div className='register'>
      <div className='container'>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Имя:</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            value={registerForm.name}
          />
          <label htmlFor='age'>Возраст:</label>
          <input
            onChange={handleChange}
            type='text'
            name='age'
            value={registerForm.age}
          />
          <label htmlFor='email'>Почта:</label>
          <input
            onChange={handleChange}
            type='text'
            name='email'
            value={registerForm.email}
          />
          <label htmlFor='password'>Пароль:</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            value={registerForm.password}
          />
          <button type='submit'>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
