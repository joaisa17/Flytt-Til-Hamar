import { FC } from 'react';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    disableTop?: boolean;
    disableBottom?: boolean;
    inverted?: boolean;
}

const Divider: FC<Props> = props => <div className={CombineClasses('divider', props.inverted && 'inverted')}>
    {!props.disableTop && <div className="top" />}
    {!props.disableBottom && <div className="bottom" />}

    {props.children}
</div>

export default Divider;