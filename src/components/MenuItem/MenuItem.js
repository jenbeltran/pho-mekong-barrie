import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const MenuItem = (props) => {

  const { code, name, price, desc, subOptions } = props.item;

  // If the item has sub options. Fresh salad rolls(A5) has 4 types
  const getAllSubOptions = (allOptions) => {
    return allOptions.map(option => {
      return(
        <li>{option}</li>
      )
    })
  };
 
  
  return(
    <ListGroupItem key={code}>
      <section className='main' style={{display: 'flex', justifyContent: 'space-between'}}> 
        <section className='item'>{code}. {name}</section>
        {props.header !== 'Pho' && <section className='price'>{(price/100).toFixed(2)}</section>}
        {(props.header === 'Pho' && subOptions) && <ul style={{padding: 'initial', display: 'flex', listStyle: 'none', justifyContent: 'space-between', width: '50%'}}>
          {getAllSubOptions(subOptions)}
        </ul>}

      </section>
      {desc && <article className='description'>{desc}</article>}
      {(subOptions && props.header !== 'Pho') &&         
        <ul style={{padding: 'initial', display: 'flex', listStyle: 'none', justifyContent: 'space-between'}}>
          {getAllSubOptions(subOptions)}
        </ul>}
    </ListGroupItem>
  )
}

export default MenuItem;