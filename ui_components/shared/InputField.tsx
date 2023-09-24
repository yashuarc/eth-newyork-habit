import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  RefObject,
} from "react";
import { getImage } from "../../src/utils";

export interface IInputFieldProps {
  type?: string;
  name?: string;
  label?: string | React.ReactElement;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  placeholder?: string | undefined;
  id?: string;
  error?: boolean;
  value?: string | number;
  setValue?: (val: string) => void;
  isOptionalLabel?: boolean;
  min?: string;
  step?: string;
  searchIcon?: string;
  autoComplete?: "on" | "off";
  maxLength?: number;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OnClear?: () => void;
  required?: boolean;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
  isSearch?: boolean;
  showClose?: boolean;
  rightText?: string;
}

const InputField: FC<IInputFieldProps> = (props) => {
  const {
    label,
    type,
    className,
    inputClassName,
    name,
    id,
    placeholder,
    value,
    onChange,
    OnClear,
    min,
    step,
    autoComplete,
    maxLength,
    onKeyDown,
    required,
    onFocus,
    onBlur,
    inputRef,
    isSearch = false,
    searchIcon,
    rightText,
  } = props;

  return (
    <div className={`relative ${className ?? ""}`}>
      {label && (
        <label className="paragraph_regular mb-1 block text-grey" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          id={id}
          name={name}
          className={`paragraph2_regular placeholder:text-text-300 focus:ring-transparent block w-full rounded-large bg-grey3 px-5 py-[14px] text-black caret-black focus:outline-none ${
            isSearch ? "pr-12" : ""
          } ${inputClassName ?? ""}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value as string | number}
          min={min}
          step={step}
          autoComplete={autoComplete}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          onWheel={() => (document.activeElement as HTMLElement).blur()}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isSearch && !value ? (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2"
            src={searchIcon}
            alt="search"
          />
        ) : null}
        {value ? (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2"
            src={getImage("close_icon.svg")}
            alt="search"
            onClick={OnClear}
          />
        ) : null}
        {rightText ? (
          <p className="paragraph_regular absolute right-5 top-1/2 -translate-y-1/2">
            {rightText}
          </p>
        ) : null}
      </div>
    </div>
  );
};
export default InputField;
