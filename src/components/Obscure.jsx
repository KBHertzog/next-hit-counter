'use client'
import {useState} from "react"

export default function Obscure({ children }) {
  const [isCensored, setIsCensored] = useState(true);
    return (
        <button
            className={isCensored ? 'censored' : undefined}
            onClick={() => 
            setIsCensored(prev => !prev)
            }
        >
            {children}
        </button>
    );
}