import { Container } from '@mui/material';
import React from 'react'
import Achievements from './components/Achievements';
import Header from './components/Header'
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Technologies from './components/Technologies';

function App() {
    return (
        <>
            <Container   >  
                <Header />
                <Hero />
                <ProjectSection/>
                <Technologies/>
                <Achievements/>
            </Container>
        </>

    )
}

export default App


if (module.hot) {
    module.hot.accept();
}