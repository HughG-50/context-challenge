import React, {useState} from 'react'
import AppContext, {themes, CustomAppProvider} from './context'
//import {themes} from './context'
import Form from './Form'
import ThemeToggler from './ThemeToggler'

const App = () => {

    // const [theme, setTheme] = useState(themes.dark)

    // const toggleTheme = () => {
    //     if(theme === themes.dark){
    //         setTheme(themes.light)
    //     } else if(theme === themes.light){
    //         setTheme(themes.ocean)
    //     } else if(theme === themes.ocean){
    //         setTheme(themes.dark)
    //     }
    // }

    return (
        <div>
            {/* Passing down a function to toggle as well as the themes */}
            {/* <AppContext.Provider value={{theme, toggleTheme}}> */}
            <CustomAppProvider>
                <Form />
                <ThemeToggler/>
            </CustomAppProvider>
            
        </div>
    )
}

export default App
