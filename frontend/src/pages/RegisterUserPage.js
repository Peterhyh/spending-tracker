import './css/RegisterUser.css';
import { useState } from 'react';
import axios from 'axios';

const RegisterUserPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    const handleSubmit = async (e) => {
        try {
            await axios.post('http://localhost:3001/user',
                JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
                .then((response) => {
                    console.log(response)
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <div className='registerUserPageContainer'>
            <form className='registerUserForm' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    id='firstName'
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor='lastName'>Last Name</label>
                <input
                    id='lastName'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    id='confirmPassword'
                    placeholder='confirmPassword'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
        </div>
    )
};

export default RegisterUserPage;