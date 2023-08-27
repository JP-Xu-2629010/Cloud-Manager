import React, { useState } from 'react';
import { Divider, Button, Select, MenuItem , TextField } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OpenWeb from './OpenWeb'; // 4 [2.2]
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import UserInfo from './Userinfo';
// 4 [2.2]


interface MountingProps {
    setN: React.Dispatch<React.SetStateAction<number>>;
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

export const Mounting: React.FC<MountingProps> = ({ setN }) => {
    const [num, setNum] = useState(0);
    const [toDisplay, setTo] = useState(0); // same as n from HomePage
    const [accessType, setType] = useState(0);
    
    const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNum(event.target.value as number);
    };

    const handleAccessChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as number);
    };

    const handelNextStepClick = () => {
        if (num == 18 || num == 31 || num == 35) {
            // setN(4);
            setTo(4);
        }
        else {
            // setN(3);
            setTo(3);
        }
    }

    const handleOpenLinkClick = () => {
        setN(10 + num);
        // const url = 'https://www.google.com'; // Replace with the desired URL
        // window.open(url, '_blank'); // Opens the URL in a new tab/window
    };

    const providerOptions = [
        "1 / 1Fichier",
        "2 / Akamai NetStorage",
        "3 / Alias for an existing remote",
        "4 / Amazon Drive",
        "5 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, ArvanCloud, Ceph, China Mobile, Cloudflare, GCS, DigitalOcean, Dreamhost, Huawei OBS, IBM COS, IDrive e2, IONOS Cloud, Liara, Lyve Cloud, Minio, Netease, Petabox, RackCorp, Scaleway, SeaweedFS, StackPath, Storj, Tencent COS, Qiniu and Wasabi",
        "6 / Backblaze B2",
        "7 / Better checksums for other remotes",
        "8 / Box",
        "9 / Cache a remote",
        "10 / Citrix Sharefile",
        "11 / Combine several remotes into one",
        "12 / Compress a remote",
        "13 / Dropbox",
        "14 / Encrypt/Decrypt a remote",
        "15 / Enterprise File Fabric",
        "16 / FTP",
        "17 / Google Cloud Storage (this is not Google Drive)",
        "18 / Google Drive",
        "19 / Google Photos",
        "20 / HTTP",
        "21 / Hadoop distributed file system",
        "22 / HiDrive",
        "23 / In memory object storage system.",
        "24 / Internet Archive",
        "25 / Jottacloud",
        "26 / Koofr, Digi Storage and other Koofr-compatible storage providers",
        "27 / Local Disk",
        "28 / Mail.ru Cloud",
        "29 / Mega",
        "30 / Microsoft Azure Blob Storage",
        "31 / Microsoft OneDrive",
        "32 / OpenDrive",
        "33 / OpenStack Swift (Rackspace Cloud Files, Blomp Cloud Storage, Memset Memstore, OVH)",
        "34 / Oracle Cloud Infrastructure Object Storage",
        "35 / Pcloud",
        "36 / PikPak",
        "37 / Put.io",
        "38 / QingCloud Object Storage",
        "39 / SMB / CIFS",
        "40 / SSH/SFTP",
        "41 / Sia Decentralized Cloud",
        "42 / Storj Decentralized Cloud Storage",
        "43 / Sugarsync",
        "44 / Transparently chunk/split large files",
        "45 / Union merges the contents of several upstream fs",
        "46 / Uptobox",
        "47 / WebDAV",
        "48 / Yandex Disk",
        "49 / Zoho",
        "50 / premiumize.me",
        "51 / seafile"
    ];

    const accessOptions = [
        "1 / Full access all files.",

        "2 / Read-only access metadata and contents.",

        "3 / Access to files created by rclone only.",

        "4 / Allows read and write access to the Application Data folder.",

        "5 / Allows read-only access to file metadata but does not allow any access to read or download file content.",

    ];

/*     const selectLabelStyle = {
        fontSize: '16px', // Adjust the font size as needed
        innerHeight: '60px'
        // You can add more styling properties here
    }; */

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Please select cloud storage provider</h2>
                <Divider/>
                <br />
                <br />
                {/* Select dropdown */}

                <div style={middleLineStyle}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel id="demo-simple-select-helper-label">Provider</InputLabel>
                        <Select
                            value={num}
                            onChange={handleOptionChange}
                            displayEmpty
                            // style={selectLabelStyle}
                        >
                            <MenuItem value={0} disabled>
                                Select an option
                            </MenuItem>
                            {providerOptions.map((option, index) => (
                                <MenuItem key={index} value={index + 1}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel id="access-simple-select-helper-label">Access type</InputLabel>
                        <Select
                            value={accessType}
                            onChange={handleAccessChange}
                            displayEmpty
                            // style={selectLabelStyle}
                        >
                            <MenuItem value={0} disabled>
                                Select an option
                            </MenuItem>
                            {accessOptions.map((option, index) => (
                                <MenuItem key={index} value={index + 1}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button size='small' variant='outlined' onClick={handelNextStepClick}>Confirm</Button>
                </div>
                {/* <h2>{num}</h2> */}

                <div>
                    <br />
                    <Divider />
                    <br />
                </div>                  

                {/* {num === 18 || num === 31 || num === 35 ? <OpenWeb /> : 
                    <TextField id="userAccount" label="Username" variant="outlined" />
                } */}
                
                {toDisplay === 3 && 
                    <div>
                        <div style={middleLineStyle}>
                            <Stack sx={{ width: '100%' }} style={middleLineStyle} spacing={2}>
                                <Alert severity="info" color='warning'>Account information needed!</Alert>
                            </Stack>
                        </div>
                        <br />
                        <div style={middleLineStyle}>
                            <TextField size='small' variant='standard' id="RemoteName" label="Remote name"/>
                        </div>  
                        <br />
                        <div style={middleLineStyle}>                          
                            <p>
                                <TextField size='small' id="userAccount" label="Username" variant="outlined" />
                            </p>
                            <p>
                                <TextField size='small' id="password" label="Password" variant="outlined" />
                            </p>
                            <Button size='small' variant='outlined' onClick={handleOpenLinkClick}>Connect</Button>
                        </div>
                    </div>
                }

                {toDisplay === 4 && <OpenWeb setN={setN} num={num}/>}

            </div>
        </ThemeProvider>
    );
};

export default Mounting;