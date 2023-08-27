import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
import { Button, FormControl, InputLabel, MenuItem, Select, Divider, TextField, Switch } from '@mui/material/';
import { SelectChangeEvent } from '@mui/material/Select';

const choices = [
  'j3_OD',
  'j3_open',
  'j3_p',
  'j_MEGA',
  'jin3_GD',
  'testOD',
];

interface TransmissionProps {
  setN: React.Dispatch<React.SetStateAction<number>>;
}

export const Transmission: React.FC<TransmissionProps> = ({ setN }) => {
  const [selectedChoice1, setSelectedChoice1] = useState('');
  const [selectedChoice2, setSelectedChoice2] = useState('');
  const [deleteOriginal, setDeleteOriginal] = useState(false);

  const handleChoice1Change = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setSelectedChoice1(selectedValue);
  };

  const handleChoice2Change = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setSelectedChoice2(selectedValue);
  };

  const handleDeleteOriginalChange = () => {
    setDeleteOriginal(!deleteOriginal);
  };

  const handleConfirmClick = () => {
    setN(5);
  };

  const choiceList2 = choices.filter(choice => choice !== selectedChoice1);
  const choiceList1 = choices.filter(choice => choice !== selectedChoice2);

  return (
    <ThemeProvider theme={theme}>
      <div className={'selection-page'}>
        <h2>Please select target and set path</h2>
        <Divider />
        <br />
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>From:</InputLabel>
            <Select
              value={selectedChoice1}
              onChange={handleChoice1Change}
            >
              {choiceList1.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField size='small' id="path_1" label="Path 1" variant="outlined" />
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>To:</InputLabel>
            <Select
              value={selectedChoice2}
              onChange={handleChoice2Change}
            >
              {choiceList2.map((choice) => (
                <MenuItem key={choice} value={choice}>
                  {choice}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField size='small' id="path_2" label="Path 2" variant="outlined" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch
            checked={deleteOriginal}
            onChange={handleDeleteOriginalChange}
            color={deleteOriginal ? 'warning' : 'primary'}
          />
          <span>Delete Original File</span>
          <Button
            size="small"
            variant="contained"
            onClick={handleConfirmClick}
            disabled={!selectedChoice1 || !selectedChoice2}
            style={{ backgroundColor: deleteOriginal ? theme.palette.warning.main : '' }}
          >
            Confirm
          </Button>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default Transmission;
