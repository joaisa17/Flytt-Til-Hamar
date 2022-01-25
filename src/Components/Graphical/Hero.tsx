import { FC } from 'react';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    src: string;
    className?: string;
    top?: boolean;
    mt?: boolean;
}

const Hero: FC<Props> = props => <div
    style={props.mt? {paddingTop: '180px'} : undefined}
    className={CombineClasses('hero', props.top && 'top')}
>
    <div className="background" style={{
        backgroundImage: `url('${props.src}')`
    }}/>

    {props.children}
</div>

export default Hero;