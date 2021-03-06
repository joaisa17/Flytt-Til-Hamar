import { Fragment } from 'react';
import { render } from 'react-dom';

import App from '@/App';
import DefaultHead from '@Components/Essential/DefaultHead';

import '@scss/_Main.scss';

render(
    <Fragment>
        <DefaultHead />
        <App />
    </Fragment>,
    document.getElementById('main')
);