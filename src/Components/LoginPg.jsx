import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import PropTypes from 'prop-types';
import "./NavCSS.css"


function LoginPg({isOpen, onClose}) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOverlayClick = (e) => {
        // Close the modal only if clicked outside the modal container
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    const handleLogin = () => {
        if (!inputValue) {
            alert('Please enter your phone number or email');
            return;
        }

        if (inputValue.includes('@')) {
            alert(`Login with Email: ${inputValue}`);
        } else {
            alert(`Logging in with Phone Number: ${inputValue}`);
        }

        onClose();

    };
    if (!isOpen) return null;


    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className='loginPg' onClick={(e) => e.stopPropagation()}>
                <label htmlFor="name">Phone No. | Email-id : </label>
                <input
                    type="text"
                    name="contact"
                    placeholder="Enter phone number or email"
                    value={inputValue}
                    onChange={handleChange}
                />

                <button onClick={handleLogin}>Login</button>

                <div className="divider-container"><
                    hr className="divider" />
                    <span className="Text">OR</span>
                    <hr className="divider" />
                </div>

                <strong className='type'>Login with Google</strong>

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </div>
        </div>
    )
}
LoginPg.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default LoginPg;
