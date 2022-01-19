import { FC } from 'react';
import { Link } from 'react-router-dom';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    to: string;
    className?: string;
    [key in JSX.Element]: any;
}

const regex = /^((http(s)?)|(ftp))(:\/\/)\S*$/;

const ExternalLink: FC<Props> = ({to, className, ...props}) => to.match(regex)?
<a
    className={CombineClasses('external-link', className)}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
/>
:
<Link
    className={CombineClasses('internal-link', className)}
    to={to}
    {...props}
/>;

export default ExternalLink;