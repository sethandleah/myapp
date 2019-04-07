import React from 'react';


// import Accordion  from './Accordion';
// import AccordionItem from './AccordionItem';

import { Accordion } from 'react-lib';
import { AccordionItem } from 'react-lib';

function App({props}){

  return (

    <Accordion>

      <AccordionItem header={"Hello"} children={"World"}/>

    </Accordion>

  )

}

export default App;
