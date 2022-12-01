import React from 'react'

function SolutionCard({props}) {
  return (
    <div>
        <h1>{props?.header}</h1>
        <p>{props?.discritpion}</p>
        <button>Learn More</button>
    </div>
  )
}

export default SolutionCard