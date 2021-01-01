import React from 'react';
import { IconX } from '@tabler/icons';

const Label = (props) => {
    let theme = "uppercase text-sm";
    theme += props.marginY || " my-1 ";
    theme += props.hintColor || " text-gray-200 ";
    theme += props.fontWeight || " font-semibold";

    return <label className={theme} htmlFor={props.htmlFor}>{props.hint}</label>
}

const Input = (props) => {
    let theme = "rounded-md outline-none ring-2 ";
    theme += props.marginY || "my-2";
    theme += props.paddingX || " px-2 ";
    theme += props.paddingY || " py-1 ";
    theme += props.background || " bg-gray-800 ";
    theme += props.ringColor || " ring-gray-500 ";
    theme += props.ringColorFocus || " focus:ring-indigo-500 ";
    theme += props.textColor || " text-white ";

    return <input 
                className={theme}
                type={props.type} 
                id={props.id} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}/>
}

const DismissButton = (props) => {
    return  <button
                className="w-max mr-2 p-2 rounded-md bg-transparent hover:bg-red-500 text-white"
                type={props.type}
                id={props.id}
                name={props.name}
                onClick={props.onClick}>
                    <span className="flex items-center h-4"><IconX/></span>
                </button>
}

const IconButton = (props) => {
    let theme = "w-max box-border rounded-md font-medium";
    theme += props.paddingX || " px-2.5 ";
    theme += props.paddingY || " py-2 ";
    theme += props.marginX || " my-4 ";
    theme += props.marginY || " ";
    theme += props.background || " bg-indigo-500 ";
    theme += props.backgroundHover || " bg-indigo-700 ";
    theme += props.textColor || " text-white ";

    return  <button
                className={theme}
                type={props.type}
                id={props.id}
                name={props.name}
                aria-label={props.label}
                onClick={props.onClick}>
                    { props.icon }
                </button>
}

const TextButton = (props) => {
    let theme = "w-full box-border rounded-md font-medium ";
    theme += props.paddingX || " px-2";
    theme += props.paddingY || " py-2";
    theme += props.marginY || " my-4";
    theme += props.background || " bg-indigo-500";
    theme += props.backgroundHover || " hover:bg-indigo-700";
    theme += props.textColor || " text-white";

    return  <button
                className={theme}
                type={props.type}
                id={props.id}
                name={props.name}
                aria-label={props.text}
                onClick={props.onClick}>
                    {props.text}
            </button>
}

const NavigationItem = (props) => {
    let navigationTheme = "w-full mt-2 p-2 rounded-md text-left hover:bg-indigo-700 hover:text-white ";
    navigationTheme += props.isActive ? " bg-indigo-400 bg-opacity-10 text-indigo-400" : " text-white ";

    return  <button 
                className={navigationTheme}
                id={props.id}
                name={props.name}
                onClick={props.onClick}
                aria-label={props.header}>
                    {props.header}
            </button>
}

export { TextButton, IconButton, DismissButton, NavigationItem, Input, Label }