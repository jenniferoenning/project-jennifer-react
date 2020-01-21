import React from 'react';

export function C_Button({onClick,label}){
    return (
        <div>
            <button onClick={() =>{onClick()}}>{label}</button>
        </div>
    )
}