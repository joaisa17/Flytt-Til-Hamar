import { FC } from 'react';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    src: string;
    className?: string;
}

const Hero: FC<Props> = props => <div className="hero">
    <div className="background" style={{
        backgroundImage: `url('${props.src}')`
    }}/>

    {props.children}
</div>

export default Hero;