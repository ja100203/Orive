import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import './Accordion.css'

const Accordian = () => {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
    <div  style={{background:'transparent'}} >
        <div className='d-flex align-items-center justify-content-center my-5'>
        <div className='accordian-section'>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} onClick={()=> setClick1(!click1)}
  sx={{ 
    backgroundColor: 'transparent'
  }}
  >
    <AccordionSummary   sx={{ 
    color: 'white'
    }}
      expandIcon={click1?<RemoveIcon  className='addIcon'/>:<AddIcon className='addIcon'/> }
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: 'auto', flexShrink: 0,fontSize:'14px' }}>
      01. Why choose Orive Solutions ?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Choose us for unparalleled IT excellence. We deliver tailored solutions, ensuring seamless integration, enhanced efficiency, and optimal performance. Trust our proven track record for innovation and client satisfaction. Your success is our priority experience the difference with our IT services.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} onClick={()=> setClick2(!click2)}
  sx={{ 
    backgroundColor: 'transparent'
  }}>
    <AccordionSummary
      expandIcon={click2?<RemoveIcon  className='addIcon'/>:<AddIcon  className='addIcon'/>}
      aria-controls="panel2bh-content"
      id="panel2bh-header"
      sx={{ 
        color: 'white'
        }}
    >
      <Typography sx={{ width: 'auto', flexShrink: 0 ,fontSize:'14px'}}>02. What services does Orive Solutions provide?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
        laoreet.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} onClick={()=> setClick3(!click3)}
  sx={{ 
    backgroundColor: 'transparent'
  }}>
    <AccordionSummary
      expandIcon={click3?<RemoveIcon  className='addIcon'/>:<AddIcon  className='addIcon'/>}
      aria-controls="panel3bh-content"
      id="panel3bh-header"
      sx={{ 
        color: 'white'
        }}
    >
      <Typography sx={{ width: 'auto', flexShrink: 0,fontSize:'14px' }}>
      03. Why is technology & IT services important?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      04. Is your business bringing good results from technology?
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} onClick={()=> setClick4(!click4)}
  sx={{ 
    backgroundColor: 'transparent'
  }}>
    <AccordionSummary
      expandIcon={click4?<RemoveIcon  className='addIcon'/>:<AddIcon  className='addIcon'/>}
      aria-controls="panel4bh-content"
      id="panel4bh-header"
      sx={{ 
        color: 'white'
        }}
    >
      <Typography sx={{ width: 'auto', flexShrink: 0,fontSize:'14px' }}>04. Is your business bringing good results from technology?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} onClick={()=> setClick5(!click5)}
  sx={{ 
    backgroundColor: 'transparent'
  }}>
    <AccordionSummary
      expandIcon={click5?<RemoveIcon  className='addIcon'/>:<AddIcon  className='addIcon'/>}
      aria-controls="panel4bh-content"
      id="panel4bh-header"
      sx={{ 
        color: 'white'
        }}
    >
      <Typography sx={{ width: 'auto', flexShrink: 0,fontSize:'14px' }}>05. What our IT consultants suggest on new topics?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
  </Accordion>
</div>
</div>
</div>
    );
}

export default Accordian;
