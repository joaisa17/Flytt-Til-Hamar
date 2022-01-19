import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import Header from '@Components/Interface/Header';

import { default as Routes } from '@Views/index';
import { Fragment } from 'react';

export default function App() {
    return <BrowserRouter>
        <Header />

        <ReactRoutes>

            {/* Create a Route component for each Route in Routes */}
            {Routes.map((r, i) => <Fragment key={i}>{r}</Fragment>)}

            {/* Redirect to default if no page was rendered */}
            <Route path="*" element={<Navigate to="/" />} />
            
        </ReactRoutes>
    </BrowserRouter>
}