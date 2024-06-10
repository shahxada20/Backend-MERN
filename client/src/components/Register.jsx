import { useState } from "react";
import {useNavigate} from "react-router-dom";

import "../styles/Contact.css"

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value, })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                setUser({ name: "", email: "", phone: "", password: "" })
                navigate("/login")
            }
            // const data = await response.json();
            console.log("Register", response)
        } catch (error) {
            console.log("register", error)
        }
    }

    return (
        <>
            <div>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="registration.png" alt="trying to register" width="400px" height="400" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">User Registration</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Name*</label>
                                        <input type="text" name="name" placeholder="Name" id="name" required autoComplete="off" value={user.name} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email*</label>
                                        <input type="text" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password*</label>
                                        <input type="text" name="password" placeholder="Password" id="password" rows="5" cols="15" required autoComplete="off" value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Contact;