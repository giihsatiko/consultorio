import React from 'react';
import Topo from '../Topo';

export default function Estrutura(props) {
 return (
   <div>
     <Topo />
     {props.children}
     
   </div>
  );
}