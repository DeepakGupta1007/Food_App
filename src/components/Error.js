import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
  const err = useRouteError();
  
  return (
    <div>Oops !! Something went wrong. {err.data}</div>
  )
}

export default Error