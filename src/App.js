import React, { useState } from 'react';
import { Header, FrontPage, MiddlePage, Slider, Footer } from './components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {
    const [ darkMode, setDarkMode ] = useState(true);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
            background: {        //black     //white
                paper: darkMode ? "#000000" : "#FFFFFF"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <FrontPage darkMode={darkMode} setDarkMode={setDarkMode}/>
            <MiddlePage/>
            <Slider/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App;