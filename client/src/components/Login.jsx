import { useState } from "react";
import "../styles/Login.css"

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "", });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img src="/images/register.png" alt="loading..." width="400" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" value={user.email} onChange={handleInput} placeholder="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login;