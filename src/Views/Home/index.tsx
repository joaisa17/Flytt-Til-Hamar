import ScrollTo from '@CommonTS/ScrollTo';

import Page from '@Components/Essential/Page';

import Hero from '@Components/Graphical/Hero';
import Divider from '@Components/Graphical/Divider';

import Hamar from '@Assets/png/Hamar.png';
import HamarKatedralskole from '@Assets/jpg/HamarKatedralskole.jpg';
import VikingSkipet from '@Assets/jpg/VikingSkipet.jpg';

import ImmersiveBackground from '@Components/Interface/ImmersiveBackground';

const Home = () => {

    return <Page protected title="Home" className="page-home">
        <Hero top src={Hamar}>
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

                <h3 onClick={() => ScrollTo("#utdanning")}>Utdanningsmuligheter</h3>
                <h3 onClick={() => ScrollTo("#fritid")}>Fritidsaktiviteter</h3>
                <h3 onClick={() => ScrollTo("#natur-arkitektur")}>Natur og arkitektur</h3>
            </div>
        </Hero>

        <Divider />

        <Hero src={HamarKatedralskole} mt>
            <h1 id="utdanning">Utdanningsmuligheter</h1>

            <p>
                Om du ikke er klar over det, er følgende innhold, en seksjon fra Lorem Ipsum:
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Hero>

        <Divider inverted />

        <Hero src={VikingSkipet} mt>
            <h1 id="fritid">Fritidsaktiviteter</h1>
        </Hero>
    </Page>
}

export default Home;