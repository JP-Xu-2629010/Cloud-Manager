import React, { useState } from 'react';
// import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
// import { Button } from '@material-ui/core';
import { Divider, Button } from '@mui/material/';
import Homepage from './XuPages/Homepage'; // 1
import Mounting from './XuPages/Mounting'// 2 [2]
// 3 [2.1]
// import OpenWeb from './XuPages/OpenWeb'; // 4 [2.2]
import ResultMounting from './XuPages/ResultMounting';// 5 [2.3]
import Transmission from './XuPages/Transmission'// 6
// 7 [3.1]
import Managing from './XuPages/Managing'// 8
interface DataMounterPanelProps {}

export const DataMounterPanel: React.FC<DataMounterPanelProps> = (props) => {
    const [n, setN] = useState(0);

    /* const handleNextClick = () => {
        if (n < 99) {
            setN(n + 1);
        }
    }; */

    const handleHomeClick = () => {
            setN(1);
    };

    const handleBackClick = () => {
        if (n > 1) {
            if (n == 8){setN(1)}
            else if (n == 6){setN(1)}
            else if (n == 2){setN(1)}
            else if (n == 5){setN(6)}
            else if (n == 3 || n == 4 || n > 8){setN(2)}
            else {setN(n - 1)}
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={'lifewatch-widget'}>
                <div className={'lifewatch-widget-content'}>
                    <div>
                        <p className={'lw-panel-header'}>Cloud Manager</p>
                    </div>
                    <Divider />
                    
                    <div style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                    <Button size="small" variant="text" onClick={handleBackClick}>《 Back</Button>
                    <div style={{ flex: 1 }}></div>
                    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <Button size="small" variant="text" onClick={handleHomeClick}>「Home」</Button>
                    </div>
                </div>

                    {/* <div>
                        <h2>{n}</h2>       
                    </div> */}

                    {n === 1 && <Homepage setN={setN}/>} {/* Conditionally render Homepage component */}
                    {n === 2 && <Mounting setN={setN}/>}
                    {n === 4 && <Mounting setN={setN}/>}
                    {n === 5 && <ResultMounting num={n}/>}
                    {n === 6 && <Transmission setN={setN}/>}
                    {n === 8 && <Managing />}
                    {n >= 10 && <ResultMounting num={n - 10}/>}
                </div>
            </div>
        </ThemeProvider>
    );
};
