import React from 'react'

export const Home = () => {
  const userData=JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
        <br/>
        <h1>Bienvenido al Resto {userData.name}</h1>
    </div>
  )
}
