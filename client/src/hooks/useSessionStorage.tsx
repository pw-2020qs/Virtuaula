import { useState, useEffect, useCallback } from 'react';


const useSessionStorage = (key: string, defaultValue = null) => {

    const storageValue = sessionStorage.getItem(key);
    const initValue = storageValue ? JSON.parse(storageValue) : null;

    const [value, setValue] = useState(initValue);
    useEffect(() => {
        if (defaultValue) {
            sessionStorage.setItem(key, JSON.stringify(defaultValue))
            setValue(defaultValue)
        }
    }, []);

    const updatingValue = useCallback(newValue => {

        sessionStorage.setItem(key, JSON.stringify(newValue));
        return setValue(newValue);
    }, [key]);

    const removingValue = useCallback(() => {

        sessionStorage.removeItem(key);
        return setValue(null);
    }, [key]);


    return [
        value,
        (valueToUp: any) => updatingValue(valueToUp),
        () => removingValue()
    ]
}

export default useSessionStorage;