
import React from "react";

export default function ShopNav(props) {
  const { selectedType, setSelectedType } = props
  const shopMenuItems = [
    'All', 
  'Accessories', 
  'Guitars', 
  'Keyboards and Synths',
  'Pedals'
]

  const listMenu = shopMenuItems.map((item) => {
      return ( 
        <li 
       style={item === selectedType? {fontWeight: 'bold'}: {fontWeight:'normal'}}
        onClick={()=>setSelectedType(item)}>{item}</li>
)
    })
  return (
    <div>
      <ul className="shop-menu">
        {listMenu}
      </ul>
    </div>
  )

};