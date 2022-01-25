import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '@ts/Essential/Auth';

import Page from '@Components/Essential/Page';

import { TextField, Button, Alert, AlertTitle } from '@mui/material';

const Login = () => {
    const [password, setPassword] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    const navigate = useNavigate();

    async function submit() {
        if (!password) return;
        const result = await Auth.login(password);

        if (!result) {
            setPasswordError("Incorrect password");
            setTimeout(() => {
                setPasswordError(undefined);
            }, 1800);

            return;
        }
        
        return navigate("/");
    }

    return <Page title="Login" className="page-login">
        <div className="login-form">
            <h3>Please log in to continue</h3>
            
            <TextField
                type="password"
                label="Password"
                onChange={e => setPassword(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && submit()}
            />

            <Button onClick={submit} className="submit" variant="outlined">Submit</Button>
        
            {passwordError && <Alert severity="error" className="error">
                <AlertTitle>ERROR</AlertTitle>
                Feil passord din bæs!
            </Alert>}

        </div>
    </Page>
}

export default Login;