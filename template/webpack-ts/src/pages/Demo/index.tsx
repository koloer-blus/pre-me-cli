import React, { ReactElement, useEffect, useRef } from 'react';
import { useStorage } from 'hooks/index';
const Demo = (): ReactElement => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useStorage('INPUT_VALUE', '');
  const handleToSaveValue = () => {
    const value = InputRef.current?.value;
    setInputValue(value);
    console.log(value);
  };
  useEffect(() => {
    InputRef.current!.value = inputValue;
  }, []);
  return (
    <div>
      <h1>Demo</h1>
      <p>This is A demo just to test</p>
      <div>
        <input type="text" ref={InputRef} />
        <button onClick={handleToSaveValue} >doIt</button>
      </div>
      <div>
        {inputValue}
      </div>
    </div>
  );
};

export default Demo;