import React, {useState} from 'react'
import AppContext from './context'
import {themes} from './context'
import Form from './Form'

const App = () => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <AppContext.Provider value={{theme}}>
            <Form />
        </AppContext.Provider>
        // implement a button which allows the user to select the theme
    )
}

export default App
