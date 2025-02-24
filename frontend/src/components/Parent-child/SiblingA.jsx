import React, { useState } from 'react'

const SiblingA = ({ sendDataToSibling }) => {
    const [inputData, setInputData] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputData(newValue);
        sendDataToSibling(newValue);
    }
    return (
        <div>siblingA
            <input type="text" className='border-red-100 bg-slate-400'
                value={inputData}
                onChange={handleChange} />
            <p>{inputData}</p>
        </div>
    )
}

export default SiblingA