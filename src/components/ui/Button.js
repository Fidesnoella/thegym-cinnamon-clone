import React from 'react'

function Button({children, style}) {
  return (
    <>
    <button className={`bg-darkBlue text-white font-medium px-8 py-3 border-2 border-darkBlue hover:bg-white hover:text-darkBlue ${style}`}>
       {children}
    </button>
    </>
  )
}

export default Button