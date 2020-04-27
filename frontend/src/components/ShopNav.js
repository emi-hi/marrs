
import React from "react";

export default function ShopNav(props) {
  const { setSelectedType } = props
  return (
    <div>
      <ul className="shop-menu">
        <li onClick={()=>setSelectedType('')}>All</li>
        <li onClick={()=>setSelectedType('Accessories')}>Accessories</li>
        <li onClick={()=>setSelectedType('Guitars')}>Guitars</li>
        <li onClick={()=>setSelectedType('Keyboards and Synths')}>Keyboards/Synths</li>
        <li onClick={()=>setSelectedType('Pedals')}>Pedals</li>
      </ul>
    </div>
  )

};