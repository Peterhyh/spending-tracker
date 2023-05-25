import './css/HomePage.css';

const HomePage = () => {
    return (
        <div className='homePageContainer'>
            <div className='incomeContainer'>
                <h1>Income:</h1>
                <div className='incomeInputsContainer'>
                    <div>
                        <label htmlFor='date'>Paycheck Date:</label>
                        <input
                            type='date'
                            id='date'
                            placeholder='date'
                        />
                    </div>

                    <div>
                        <label htmlFor='date'>Paycheck Amount</label>
                        <input
                            type='string'
                            id='amount'
                            placeholder='Paycheck Amount'
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;