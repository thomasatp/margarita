import React, {useState, useEffect} from 'react'
import Toast from '../toast/Toast'
import './Footer.scss'

function EmailForm() {

    const [inputValue,
        setInputValue] = useState("")

    const [position,
        setPosition] = useState('-376px')

    const [verified,
        setVerified] = useState()

    let checked = inputValue.includes('@')

    function handleSubmit(e) {
        e.preventDefault()
        checked = inputValue.includes('@')
        checked
            ? setPosition('16px')
            : setVerified(
                <p className="error">Your email address must contains an @</p>
            )
    }

    useEffect(() => {
        checked && setVerified()
    }, [checked])

    useEffect(() => {
        position === "16px" && setTimeout(() => setPosition('-376px'), 3000)
    }, [position])

    function checkValue(e) {

        setInputValue(e.target.value)

    }

    return (
        <div className="footer">
            <div className="formContainer">
                <p className="footerTitle">Subscribe to our newsletter</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder="Your email address"
                        value={inputValue}
                        onChange={checkValue}
                        onBlur={() => !checked
                        ? setVerified(
                            <p className="error">Your email address must contains an @</p>
                        )
                        : setVerified(null)}/>
                    <button type="submit">Submit</button>
                </form>
                <Toast
                    position={position}
                    onClick={() => setPosition('-376px')}
                    message="You have successfully subscribe to our newsletter"/> {verified}

            </div>
        </div>
    )
}

export default EmailForm