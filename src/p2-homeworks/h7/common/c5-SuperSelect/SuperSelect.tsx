import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {log} from "util";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions =
    options.map((op,i) =>
    <option key={i}>{op}</option>); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
