import { useState } from 'react';

const useFormInput = (initInputVal) => {
    const [input, setInput] = useState(initInputVal);

    const clearInput = () => {
        setInput('');
    }

    const handleChangeInput = evt => {
        setInput(evt.target.value);
    }

    return [input, clearInput, handleChangeInput];

}

export default useFormInput;