import React from "react"
import { Icon } from 'semantic-ui-react'
import { ListGroupItem } from "reactstrap"
import {
  PhoSizeOptions,
  SubOptions,
  ItemMain,
  ItemDetails,
} from "./MenuItem.css"
import { uuid } from "uuidv4"

// TOD0: Refactor
const MenuItem = ({ item, header }) => {
  const { code, name, price, desc, subOptions } = item

  // Only A5 and Pho items have supoptions
  const getAllSubOptions = allOptions => {
    return allOptions.map(option => {
      return <li key={uuid()}>{option}</li>
    })
  }

  return (
    <ListGroupItem key={code} id="item-container">
      <ItemMain>
        <section
          className="item-name-and-code"
          style={{ paddingRight: "1em", maxWidth: "60%" }}
        >
          {code}. {name}
        </section>
        {header !== "Pho" && (
          <section className="price" style={{ alignSelf: "center" }}>
            {(price / 100).toFixed(2)}
            <label id={code} for="quantity">
						
							<Icon as={Icon} name='cart plus icon' bordered inverted color="teal" size='large' />

				
            </label>
          </section>
        )}
        {header === "Pho" && subOptions && (
          <PhoSizeOptions>{getAllSubOptions(subOptions)}</PhoSizeOptions>
        )}
      </ItemMain>
      <ItemDetails>
        {desc && <article className="description">{desc}</article>}
        {subOptions && header !== "Pho" && (
          <SubOptions>{getAllSubOptions(subOptions)}</SubOptions>
        )}
      </ItemDetails>
    </ListGroupItem>
  )
}

export default MenuItem
