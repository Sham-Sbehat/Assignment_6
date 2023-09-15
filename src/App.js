import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import './App.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicAccordion() {
  const [helloContainerHeight, setHelloContainerHeight] = React.useState('100px'); // Initial height
  const [isSwitchChecked, setIsSwitchChecked] = React.useState(false); // Switch state

  const fun = () => {
    // Change the height of the "Hello word" container when the switch is clicked
    setHelloContainerHeight(helloContainerHeight === '100px' ? '200px' : '100px');
    // Toggle the switch state
    setIsSwitchChecked(!isSwitchChecked);
  };

  return (
    <div>
      <Container style={{width:'50%', padding:'30px'}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontSize="large">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontSize="large">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Use a Box component with flex display for centering */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Switch
                {...label}
                checked={isSwitchChecked}
                onClick={fun}
                className={isSwitchChecked ? 'green-switch' : ''}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ backgroundColor: 'teal', height: helloContainerHeight }}
        >
          <Typography variant="h5" component="h2" color="white">
            Hello World
          </Typography>
        </Box>
      </Container>
      
    </div>
  );
}
