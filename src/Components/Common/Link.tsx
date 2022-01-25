import { FC } from 'react';
import { Link } from 'react-router-dom';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    to: string;
    className?: string;
}

const regex = /^((http(s)?)|(ftp))(:\/\/)\S*$/;

const ExternalLink: FC<Props> = ({to, className, children, ...props}) => to.match(regex)?
<a
    className={CombineClasses('external-link', className)}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    children={children}
/>
:
<Link
    className={CombineClasses('internal-link', className)}
    to={to}
    {...props}
    children={children}
/>;

export default ExternalLink;