import React, { useState, useRef } from "react"
import { ListGroupItem } from "reactstrap"
import {
  PhoSizeOptions,
  SubOptions,
  ItemMain,
  ItemDetails,
} from "./MenuItem.css"
import { uuid } from "uuidv4"
import { useImperativeHandle } from "react"

// TOD0: Refactor
const MenuItem = ({ item, header }) => {

	const [quantity, setQuantity] = useState(0)
	// const inputValue = useRef(0)

	const handleQuantity = () => {
		console.log('Here')
	}

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
          <section className="price" style={{ alignSelf: "center", display: 'flex' }}>
            {(price / 100).toFixed(2)}
					<section className="quantity">
						<label htmlFor="quantity">
							<button onClick={() => setQuantity(quantity - 1)}>
								-
							</button>
							<input value={quantity} type="number" min="0" placeholder="0" id="quantity" name="quantity"></input>
							<button onClick={() => setQuantity(quantity + 1)}>
								+
							</button>
						</label>
					</section>
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
