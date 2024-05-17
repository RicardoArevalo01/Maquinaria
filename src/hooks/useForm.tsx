import {useEffect, useRef, useState} from 'react';

export const useForm = <T extends {[key: string]: any}>(
  initFormState: T,
  validations: {[key in keyof T]: [(value: T[key]) => boolean, string]},
) => {
  const [formState, setFormState] = useState<T>(initFormState);
  const [errors, setErrors] = useState<{[key in keyof T]?: string}>({});
  const validationsRef = useRef(validations);

  useEffect(() => {
    validationsRef.current = validations;
  }, [validations]);

  useEffect(() => {
    const validateForm = () => {
      const newErrors: {[key in keyof T]?: string} = {};
      for (const field in validationsRef.current) {
        const [validationFn, errorMessage] = validationsRef.current[field];
        const isValid = validationFn(formState[field]);
        if (!isValid) {
          newErrors[field] = errorMessage;
        }
      }
      setErrors(newErrors);
    };

    validateForm();
  }, [formState]);

  const onChange = <K extends keyof T>(value: T[K], field: K) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const isFormValid = () => {
    for (const field in errors) {
      if (errors[field]) {
        return false;
      }
    }
    return true;
  };

  return {
    ...formState,
    errors,
    onChange,
    isFormValid,
  };
};
