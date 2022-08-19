import '../styles/footer.css';
import {useState} from 'react';

function Footer() {
    const [inputValue, setInputValue] = useState ('');

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur () {
        if (!inputValue.includes('@')) {
            alert("There is no @. This is not a valid email! 😥")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                For people passionate about plants 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
            Drop us your email :
            </div>
            <input
				placeholder='Enter your email'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
        </footer>
    )
}

export default Footer;