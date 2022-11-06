import { Component } from "react";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Components/styles/Global";
import content from '../content';
import { Container } from "../Components/styles/Container.styled";

const theme = {
    colors:{
        header: '#ebfbff',
        body:'#fff',
        footer:'#003333',
    },
    mobile:'768px',    
}

class App extends Component{

    render(){
        return(
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles/>
                    <Header/>
                    <Container>
                        {content.map((item, id) => {
                            return(
                                <Card key={id} item={item}/>
                            )
                        })}
                    </Container>
                    <Footer/>
                </>
            </ThemeProvider>
        )
    }
}

export default App;