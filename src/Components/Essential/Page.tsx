import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Auth from '@ts/Essential/Auth';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    title: string;
    description?: string;

    className?: string;
    protected?: boolean;

    targetId?: string;
    disableScrollOnLoad?: boolean;
}

const Page: FC<Props> = props => {

    useEffect(() => {
        if (!props.disableScrollOnLoad) {
            const element = (
                (props.targetId && document.getElementById(props.targetId))
                || (window.location.hash && document.querySelector(window.location.hash))
            );

            element ? element.scrollIntoView({ behavior: 'smooth' }) : window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [props.disableScrollOnLoad, props.targetId]);

    if (props.protected && !Auth.isLoggedIn()) return <Navigate to="/login" />
    
    return <div className={CombineClasses('page content', props.className)}>
        <Helmet>
            {props.title && <title>{props.title}</title>}
        </Helmet>
        
        {props.children}
    </div>
}

export default Page;