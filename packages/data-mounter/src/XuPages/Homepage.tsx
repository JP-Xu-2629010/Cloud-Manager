import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
// import { Button } from '@material-ui/core';
import { Button } from '@mui/material/';

// 1


interface HomepageProps {
    setN: React.Dispatch<React.SetStateAction<number>>;
}

const middleLineStyle = {
    display: 'flex',                // Use flex display
    justifyContent: 'center',       // Center horizontally
    alignItems: 'center',           // Center vertically
    // height: '100px',                // Adjust the height of the container
};

const buttonStyle = {
    width: '200px', // Adjust the width as neededß
    height: '60px', // Adjust the height as needed
    fontSize: '16px', // Adjust the font size as needed
    margin: '5px', // Add margin for spacing between buttons
    display: 'flex',        // Use flex display
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
};

const Homepage: React.FC<HomepageProps> = ({ setN }) => {
    const handleMountingClick = () => {
        setN(2);
    };

    const handleDataTransmissionClick = () => {
        setN(6);
    };

    const handleManagingClick = () => {
        setN(8);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Please select function</h2>
                <br />      
                <br />  
                <div style={middleLineStyle}>
                    <Button variant='outlined' style={buttonStyle} onClick={handleMountingClick}>Create New Remote</Button>
                </div>
                <br /> 
                <div style={middleLineStyle}>
                    <Button variant='outlined' style={buttonStyle} onClick={handleDataTransmissionClick}>Data Transmission</Button>
                </div>
                <br /> 
                <div style={middleLineStyle}>
                    <Button variant='outlined' style={buttonStyle} onClick={handleManagingClick}>Remote Management</Button>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Homepage;
