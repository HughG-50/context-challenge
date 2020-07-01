import React, {useContext, useState} from 'react'
import AppContext from './context'

const ThemeInput = () => {
    // This input should use the current theme
    const appContext = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')
    return (
        <input
            type="text"
            value={inputValue}
            style={appContext.theme}
            onChange={e => setInputValue(e.target.value)}
        />
    )
}

export default ThemeInput

