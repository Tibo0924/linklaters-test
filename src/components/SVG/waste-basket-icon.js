import React from 'react'

const WasteBasket = ({ color, className, width, height }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 50 50"
  >
    <path
      d="M8.36 43.021a3.213 3.213 0 0 0 3.211 3.213h23.094a3.209 3.209 0 0 0 3.209-3.213V15.747H8.36v27.274zM37.313 3.333h-8.961C27.431 1.325 25.435 0 23.119 0c-2.317 0-4.312 1.325-5.234 3.333H8.924c-1.774 0-3.241 1.423-3.241 3.198V9.78c0 1.774 1.467 3.229 3.241 3.229h28.389c1.775 0 3.238-1.455 3.238-3.229V6.531c0-1.775-1.463-3.198-3.238-3.198z"
      fill={color}
    />
  </svg>
)

export default WasteBasket;
