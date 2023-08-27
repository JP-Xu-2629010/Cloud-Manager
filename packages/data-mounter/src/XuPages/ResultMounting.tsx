import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import dataImage_31 from './OD.png';
import dataImage_18 from './GD.png'; 
import dataImage_32 from './OPEN.png'; 

const middleLineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

interface ResultMountingProps {
    num: number;
}

const ResultMounting: React.FC<ResultMountingProps> = ({ num }) => {
    const [showInfoAlert, setShowInfoAlert] = useState(true);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInfoAlert(false);
            setShowSuccessAlert(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Stack sx={{ width: '100%' }} style={middleLineStyle} spacing={2}>
                    {showInfoAlert && <Alert color='warning' severity="info">Please wait a moment.</Alert>}
                    {showSuccessAlert && <Alert severity="success">Success!</Alert>}
                </Stack>
                {showSuccessAlert && (
                    (num === 31 ? <img src={dataImage_31} alt="Data" style={{ width: '100%' }} />
                    : num === 18 ? <img src={dataImage_18} alt="Data" style={{ width: '100%' }} />
                    : num === 32 ? <img src={dataImage_32} alt="Data" style={{ width: '100%' }} />
                    : null)
                )}
            </div>
        </ThemeProvider>
    );
};

export default ResultMounting;
