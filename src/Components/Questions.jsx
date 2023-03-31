import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Questions = () => {

    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="work-section-wrapper"  id='Questions'>
      <div className="work-section-top">
        <p className="primary-subheading">Preguntas frecuentes</p>
        <h1 className="primary-heading">Conoce más sobre Innovacarb</h1>
        <p className="primary-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      <div>

      </div>
      {/* Pregunta1 */}
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
        <p>¿Cómo funciona?</p>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </AccordionDetails>
    </Accordion>
    {/* Pregunta2 */}
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
        <h3>¿Cómo producen carbono activado?</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </AccordionDetails>
    </Accordion>
    {/* Pregunta3 */}
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
        <h3>¿Cuánta borra de café se necesita para producir 1kg de carbono activado?</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </AccordionDetails>
    </Accordion>
    {/* Pregunta4 */}
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={<ExpandMoreIcon />}>
        <h3>¿Cuántas cafeterías puedo registrar?</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </AccordionDetails>
    </Accordion>
    {/* Pregunta5 */}
    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={<ExpandMoreIcon />}>
        <h3>¿Puedo donar mi borra de café si no cuento con una cafetería?</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </AccordionDetails>
    </Accordion>
    </div>
    )
}

export default Questions