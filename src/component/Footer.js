import React from 'react'

export const Footer = () => {
  let footstyle={
    position:"relative",
    top:"70vh",
    width:"100%"
  }
  return (
    <div className="bg-dark text-light py-3" style={footstyle}>
      <p className="text-center">Copyright &copy; MytodosList.com</p>
    </div>
  )
}
