import { Route } from 'react-router-dom';

// Import all views
import Home from './Home';
import Login from './Login';

export default [
    <Route path="/" element={<Home />} />,
    <Route path="/login" element={<Login />} />
];