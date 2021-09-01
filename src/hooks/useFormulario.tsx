import React, { useState } from 'react';

export const formulario = <T extends Object> (formulario: T) => {

    const [state, setState] = useState(formulario);

    const onChange = <K extends Object>(campo: keyof T, valor: K) => {
        setState({
            ...state,
            [campo]: valor
        });
    }

    return {
        ...state,
        formulario: state,
        onChange,
    }

}