import React from 'react'

export const Alert = ({ message }) => (
  <div className="alert alert-warning" role="alert">
    {message}
  </div>
)