import Page from '@Components/Essential/Page';

import Hero from '@Components/Graphical/Hero';
import Hamar from '@Assets/png/Hamar.png';

const Home = () => <Page title="Home">
        <div className="text-content mt bg p">
            <h1>Flytt til hamar!</h1>

            <p>
                Ønsker du å bo i en by som tilbyr alt du trenger? Ønsker du å flytte
                til et tettsted som inkluderer alle? Da er Hamar et sted for deg!
            </p>

            <h2>Tre grunner for å flytte til Hamar</h2>
        </div>
</Page>

export default Home;