import React from 'react'

const Featureds = () => {
    const projectCatagory = ['Featureds','Web App','Mobile App','Design','Content']
  return (
    <div>
      {
        projectCatagory.map((item) => {
          return <h1>{item}</h1>
        })
      }
    </div>
  )
}

export default Featureds