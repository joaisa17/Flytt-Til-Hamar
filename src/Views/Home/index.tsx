import Page from '@Components/Essential/Page';

import Hero from '@Components/Graphical/Hero';
import Hamar from '@Assets/png/Hamar.png';

import ImmersiveBackground from '@Components/Interface/ImmersiveBackground';

const Home = () => <Page title="Home">
    <Hero src={Hamar}>
        <ImmersiveBackground />
        
        <div className="text-content mt bg p">
            <h1>Flytt til hamar!</h1>

            <p>
                Ønsker du å bo i en by som tilbyr alt du trenger? Ønsker du å flytte
                til et tettsted som inkluderer alle? Da er Hamar et sted for deg!
            </p>
        </div>

        <div className="text-content mt bg p">    
            <h2>Tre grunner for å flytte til Hamar:</h2>

            <h3>Utdanningsmuligheter</h3>
            <h3>Fritidsaktiviteter</h3>
            <h3>Sentralt i innlandet</h3>
        </div>
    </Hero>
</Page>

export default Home;