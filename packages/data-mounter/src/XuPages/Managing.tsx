import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme';
import { Alert, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import dataImage_31 from './OD.png';
import dataImage_18 from './GD.png'; 
import dataImage_32 from './OPEN.png'; 

const providers = [
  { name: 'j3_OD', type: 'One Drive', image: dataImage_31 },
  { name: 'jin3_GD', type: 'Google Drive', image: dataImage_18 },
  { name: 'j3_open', type: 'Open Drive', image: dataImage_32 },
  { name: 'j3_p', type: 'pCloud', image: 'url_to_image3' },
  { name: 'j_MEGA', type: 'MEGA', image: 'url_to_image4' },
  { name: 'testOD', type: 'One Drive', image: dataImage_31 },
];

interface ProviderAccordionProps {
  name: string;
  type: string;
  image: string;
  onRemove: (name: string) => void;
}

const ProviderAccordion: React.FC<ProviderAccordionProps> = ({ name, type, image, onRemove }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckConnection = () => {
    setChecked(true);
  };

  const handleRemoveRemote = () => {
    onRemove(name);
  };

  return (
    <Accordion sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '10px' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {name}
      </AccordionSummary>
      <AccordionDetails style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4>{type}</h4>
        <img src={image} alt="Provider" style={{ width: '100%' }} />
        {checked && <Alert severity="success">Remote checked</Alert>}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Button variant="outlined" onClick={handleCheckConnection}>
            Check connection
          </Button>
          <Button variant="outlined" onClick={handleRemoveRemote}>
            Remove remote
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

interface AccordionPageProps {}

export const AccordionPage: React.FC<AccordionPageProps> = () => {
  const [removedProvider, setRemovedProvider] = useState<string | null>(null);

  const handleProviderRemove = (name: string) => {
    setRemovedProvider(name);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={'accordion-page'}>
        {removedProvider && (
          <Alert severity="warning" style={{ marginBottom: '10px' }}>
            {`${removedProvider} removed`}
          </Alert>
        )}
        {providers.map((provider, index) => (
          !removedProvider || removedProvider !== provider.name ? (
            <ProviderAccordion
              key={index}
              name={provider.name}
              type={provider.type}
              image={provider.image}
              onRemove={handleProviderRemove}
            />
          ) : null
        ))}
      </div>
    </ThemeProvider>
  );
};

export default AccordionPage;
