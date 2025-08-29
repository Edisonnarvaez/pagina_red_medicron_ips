import React, { useState, useRef, useEffect } from 'react';

interface FormFieldProps {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file';
  name: string;
  label: string;
  value?: string | boolean;
  options?: { value: string; label: string }[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helpText?: string;
  errorMessage?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  accept?: string; // Para campos file
  multiple?: boolean; // Para campos file y select
  onChange?: (value: string | boolean | File[]) => void;
  onBlur?: () => void;
  className?: string;
}

const AccessibleFormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  value,
  options = [],
  required = false,
  disabled = false,
  placeholder,
  helpText,
  errorMessage,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  accept,
  multiple = false,
  onChange,
  onBlur,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(null);
  const fieldId = `field-${name}`;
  const helpId = `help-${name}`;
  const errorId = `error-${name}`;

  // Auto-foco en campos con error
  useEffect(() => {
    if (errorMessage && inputRef.current) {
      inputRef.current.focus();
    }
  }, [errorMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!onChange) return;

    if (type === 'checkbox') {
      onChange((e.target as HTMLInputElement).checked);
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      onChange(files ? Array.from(files) : []);
    } else {
      onChange(e.target.value);
    }
  };

  const handleBlur = () => {
    setFocused(false);
    setTouched(true);
    onBlur?.();
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const commonProps = {
    id: fieldId,
    name,
    ref: inputRef as any,
    disabled,
    required,
    'aria-describedby': [
      helpText ? helpId : '',
      errorMessage ? errorId : ''
    ].filter(Boolean).join(' ') || undefined,
    'aria-invalid': errorMessage ? true : false,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: `
      w-full border rounded-md px-3 py-2 transition-colors duration-200
      ${errorMessage 
        ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' 
        : 'border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary'
      }
      ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'}
      ${focused ? 'ring-2 ring-opacity-50' : ''}
      focus:outline-none focus:ring-2
      ${className}
    `
  };

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            value={value as string || ''}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            rows={4}
            aria-label={label}
          />
        );

      case 'select':
        return (
          <select
            {...commonProps}
            value={value as string || ''}
            multiple={multiple}
            aria-label={label}
          >
            {placeholder && !required && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-start">
            <input
              {...commonProps}
              type="checkbox"
              checked={value as boolean || false}
              className={`
                mr-3 mt-1 h-4 w-4 rounded border-gray-300 text-clinic-primary 
                focus:ring-clinic-primary focus:ring-2 focus:ring-opacity-50
                ${errorMessage ? 'border-red-500' : ''}
                ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
              `}
              aria-label={label}
            />
            <label 
              htmlFor={fieldId} 
              className={`text-sm cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {label}
              {required && <span className="text-red-500 ml-1" aria-label="requerido">*</span>}
            </label>
          </div>
        );

      case 'radio':
        return (
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-2">
              {label}
              {required && <span className="text-red-500 ml-1" aria-label="requerido">*</span>}
            </legend>
            <div className="space-y-2" role="radiogroup" aria-labelledby={fieldId}>
              {options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`${fieldId}-${option.value}`}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={`
                      mr-3 h-4 w-4 text-clinic-primary border-gray-300 
                      focus:ring-clinic-primary focus:ring-2 focus:ring-opacity-50
                      ${errorMessage ? 'border-red-500' : ''}
                      ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    aria-describedby={[
                      helpText ? helpId : '',
                      errorMessage ? errorId : ''
                    ].filter(Boolean).join(' ') || undefined}
                  />
                  <label 
                    htmlFor={`${fieldId}-${option.value}`}
                    className={`text-sm cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        );

      case 'file':
        return (
          <div>
            <input
              {...commonProps}
              type="file"
              accept={accept}
              multiple={multiple}
              className={`
                w-full border border-gray-300 rounded-md px-3 py-2 bg-white
                file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0
                file:text-sm file:font-medium file:bg-clinic-primary file:text-white
                hover:file:bg-clinic-primary-dark
                ${errorMessage ? 'border-red-500' : ''}
                ${disabled ? 'opacity-60 cursor-not-allowed file:cursor-not-allowed' : 'cursor-pointer file:cursor-pointer'}
                focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-clinic-primary
              `}
              aria-label={label}
            />
            {accept && (
              <p className="text-xs text-gray-500 mt-1">
                Formatos aceptados: {accept}
              </p>
            )}
          </div>
        );

      default:
        return (
          <input
            {...commonProps}
            type={type}
            value={value as string || ''}
            placeholder={placeholder}
            pattern={pattern}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            aria-label={label}
          />
        );
    }
  };

  return (
    <div className={`form-field ${className}`}>
      {type !== 'checkbox' && type !== 'radio' && (
        <label 
          htmlFor={fieldId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="requerido">*</span>}
        </label>
      )}

      {renderField()}

      {helpText && (
        <p 
          id={helpId}
          className="mt-1 text-sm text-gray-600"
          role="note"
        >
          {helpText}
        </p>
      )}

      {errorMessage && (
        <p 
          id={errorId}
          className="mt-1 text-sm text-red-600 flex items-center"
          role="alert"
          aria-live="polite"
        >
          <svg 
            className="w-4 h-4 mr-1 flex-shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {errorMessage}
        </p>
      )}

      {/* Indicador de cumplimiento matriz ITA */}
      {touched && !errorMessage && required && (
        <div className="mt-1 flex items-center text-xs text-green-600">
          <svg 
            className="w-3 h-3 mr-1" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>Campo completado correctamente</span>
        </div>
      )}
    </div>
  );
};

export default AccessibleFormField;
