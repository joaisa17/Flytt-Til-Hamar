import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from '@ts/Essential/Auth';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    title: string;
    description?: string;

    className?: string;
    protected?: boolean;
}

const Page: FC<Props> = props => {

    if (props.protected && !Auth.isLoggedIn()) return <Navigate to="/" />
    
    return <div className={CombineClasses('page content', props.className)}>
        {props.children}
    </div>
}

export default Page;