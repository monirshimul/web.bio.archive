import { useEffect, useState } from "react"


export const useThemeState = (defaultValue, key)=>{
    const [value, setValue] = useState(defaultValue)
    useEffect(()=>{
        const themeValue = localStorage.getItem(key)
        setValue(themeValue)
    },[key, setValue])
    return [value, (v)=>{
            localStorage.setItem(key,v)
            setValue(v)
    }]
}