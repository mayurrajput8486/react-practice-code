import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {name} = useParams()
  return (
    <div>
        <h2>The {name} Details are...</h2>
    </div>
  )
}

export default UserDetails