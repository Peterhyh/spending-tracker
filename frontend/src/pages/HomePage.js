import './css/HomePage.css';
import axios from 'axios';
import { useState } from 'react';

const HomePage = () => {
    const [date, setDate] = useState();
    const [paycheck, setPaycheck] = useState();

    const handleSubmit = async (e) => {
        try {
            await axios.post('http://localhost:3001/income',
                JSON.stringify({ date: date, paycheck: paycheck }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
                .then((response) => {
                    console.log(response)
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className='homePageContainer'>
            <div className='incomeContainer'>
                <form onSubmit={handleSubmit}>
                    <h1>Income:</h1>
                    <div className='incomeInputsContainer'>
                        <div>
                            <label htmlFor='date'>Paycheck Date:</label>
                            <input
                                type='date'
                                id='date'
                                placeholder='date'
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor='paycheck'>Paycheck Amount</label>
                            <input
                                type='Number'
                                id='paycheck'
                                placeholder='Paycheck Amount'
                                onChange={(e) => setPaycheck(e.target.value)}
                            />
                        </div>

                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default HomePage;