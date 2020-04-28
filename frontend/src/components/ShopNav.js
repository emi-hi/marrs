
import React from "react";

export default function ShopNav(props) {
  const { setSelectedType } = props
  const shopMenuItems = [
    'All', 
  'Accessories', 
  'Guitars', 
  'Keyboards and Synths',
  'Pedals'
]
  const listMenu = shopMenuItems.map((item) => {
      return ( 
        <li onClick={()=>setSelectedType(item)}>{item}</li>
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