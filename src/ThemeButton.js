import React, {useContext} from 'react'
import AppContext from './context'

const ThemeButton = ({text}) => {
    // This button should use the current theme
    const appContext = useContext(AppContext)
    // console.log(appContext)
    return (
        <button style={appContext.theme}>{text}</button>
    )
}

export default ThemeButton
