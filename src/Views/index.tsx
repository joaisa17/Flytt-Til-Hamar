import { Route } from 'react-router-dom';

// Import all views
import Home from './Home';
import Login from './Login';

const Routes = [
    <Route path="/" element={<Home />} />,
    <Route path="/login" element={<Login />} />
];

export default Routes;