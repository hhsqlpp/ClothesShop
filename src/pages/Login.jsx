import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    let [loginForm, setLoginForm] = useState({});

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: [e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
 
        let request = {
            method: "POST",
            body: JSON.stringify(loginForm),
            headers: {
                "Content-type": "application/json",
            },
        };
  
        fetch("http://localhost:1717/login", request)
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("x-token", data.token);
                    alert("You have logined successfully");
                    window.location.href = "/";
                } else {
                    alert("Login Error");
                }
            });
    }

    return (
        <div className="login">
            <div className="container">
                <h2>Войти</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Имя:</label>
                    <input onChange={handleChange} type="text" name="name" value={loginForm.name} />
                    <label htmlFor="password">Пароль:</label>
                    <input onChange={handleChange} type="password" name="password" value={loginForm.password} />
                    <button type="submit">Войти</button>
                </form>
                <p>Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link></p>
            </div>
        </div>
    )
}