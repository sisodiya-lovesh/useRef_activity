import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default Input;
