import React, {useState} from 'react'

export const themes = {
    light: {
        color: 'black',
        background: 'white'
    },
    dark: {
        color: 'white',
        background: 'black'
    },
    ocean: {
        color: 'blue',
        background: 'grey'
    }
}

const AppContext = React.createContext()

export const CustomAppProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark)

    const toggleTheme = () => {
        if(theme === themes.dark){
            setTheme(themes.light)
        } else if(theme === themes.light){
            setTheme(themes.ocean)
        } else if(theme === themes.ocean){
            setTheme(themes.dark)
        }
    }
    
    return (
        <AppContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
