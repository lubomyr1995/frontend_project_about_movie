import {FC, forwardRef, InputHTMLAttributes} from "react";

import css from "./Input.module.css";
import {useAppSelector} from "../../../hooks";


interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    className?: string;
}

const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(({id, label, className = '', ...props}, ref) => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    let styleClasses = css.container;
    if (className) {
        styleClasses += ` ${className}`;
    }

    return (
        <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'}
             className={styleClasses}>
            <label className={css.label} htmlFor={id}>{label}</label>
            <input ref={ref} className={css.input} id={id} name={id} required {...props} />
        </div>
    );
});

export {Input};