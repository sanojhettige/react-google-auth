import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';

const responseGoogle = (response) => {
    console.log(response);
  }

const LoginButton = () => {
    return <GoogleLogin
    clientId="1077577956946-r5lelrju6j6dbtk8v29k53srg23vtvrt.apps.googleusercontent.com"
    render={renderProps => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} color="inherit">Login</Button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />;
};

export default LoginButton;