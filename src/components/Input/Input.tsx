import React from "react";
import { IInput } from "../../interface/IInput";

export default function Input({onChange, inputRef, placeholder, value, type } : IInput) {
    return (
        <input
          type={type}
          onChange={event => onChange(event.target.value)}          
          placeholder={placeholder}
          value={value}
          ref={inputRef}
        />
      );

}