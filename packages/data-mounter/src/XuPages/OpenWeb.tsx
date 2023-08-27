import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
// import { Button } from '@material-ui/core';
import { Button ,TextField } from '@mui/material/';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// 4 [2.2]


interface OpenWebProps {
    setN: React.Dispatch<React.SetStateAction<number>>;
    num: number;
}

const middleLineStyle = {
    display: 'flex',                // Use flex display
    justifyContent: 'center',       // Center horizontally
    alignItems: 'center',           // Center vertically
    // height: '100px',                // Adjust the height of the container
};

/* const buttonStyle = {
    width: '200px', // Adjust the width as needed
    height: '50px', // Adjust the height as needed
    fontSize: '16px', // Adjust the font size as needed
    margin: '5px', // Add margin for spacing between buttons
}; */

export const OpenWeb: React.FC <OpenWebProps> = ({setN, num}) => {

    const handleOpenLinkClick = () => {
        setN(10 + num);
        const urlOD = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?access_type=offline&client_id=b15665d9-eda6-4092-8539-0eec376afd59&redirect_uri=http%3A%2F%2Flocalhost%3A53682%2F&response_type=code&scope=Files.Read+Files.ReadWrite+Files.Read.All+Files.ReadWrite.All+Sites.Read.All+offline_access&state=lgPz6Ln-8gNHnpEe_MWdlg'; // Replace with the desired URL
        const urlGD = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=202264815644.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A53682%2F&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&state=MtA-wb0PBjxJ47wSFEVAuA&service=lso&o2v=1&flowName=GeneralOAuthFlow';
        if (num == 31) {
            window.open(urlOD, '_blank'); // Opens the URL in a new tab/window
        }
        else if (num == 18) {
            window.open(urlGD, '_blank');
        }
        
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', /* justifyContent: 'center', */ height: '100vh' }}>
                <br />
                {/* <h2>{num}</h2> */}
                <Stack sx={{ width: '100%' }} style={middleLineStyle} spacing={2}>
                    <Alert severity="success">Automatic authentication supported!</Alert>
                </Stack>
                <br />
                <p>Use web browser to automatically authenticate rclone with remote</p>
                <br />
                <div>
                    <TextField size='small' variant='standard' id="RemoteName" label="Remote name"/>
                </div> 
                <br />
                <Button size='large' variant='contained' onClick={handleOpenLinkClick}>Open in Browser</Button>
            </div>
        </ThemeProvider>
    );
};

export default OpenWeb;