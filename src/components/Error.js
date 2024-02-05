import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err = useRouteError();
    // console.log(err);
  return (
    <div>Oops !! Something went wrong. {err.data}</div>
  )
}

export default Error