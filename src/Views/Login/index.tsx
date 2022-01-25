import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '@ts/Essential/Auth';

import Page from '@Components/Essential/Page';

import { TextField, Button, Alert, AlertTitle } from '@mui/material';

const Login = () => {
    const [password, setPassword] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    const navigate = useNavigate();

    var timeout: NodeJS.Timeout;
    async function submit() {
        if (!password) return setPassword('');
        const result = await Auth.login(password);

        if (!result) {
            if (timeout) clearTimeout(timeout);

            setPasswordError("Incorrect password");
            timeout = setTimeout(() => {
                setPasswordError(undefined);
            }, 2500);

            return;
        }
        
        return navigate("/");
    }

    return <Page title="Login" className="page-login">
        <div className="login-form">
            <h3>Please log in to continue</h3>
            
            <TextField
                error={password === '' ? true : false}
                type="password"
                label={`Password ${password === ''? '(Required)' : ''}`}
                onChange={e => setPassword(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && submit()}
            />

            <Button onClick={submit} className="submit" variant="outlined">Submit</Button>
        
            {passwordError && <Alert sx={{ width: 'fit-content', mt: '10px' }} severity="error" className="error">
                <AlertTitle>ERROR</AlertTitle>
                Feil passord din bæs!
            </Alert>}

        </div>
    </Page>
}

export default Login;