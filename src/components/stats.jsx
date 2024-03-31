import React from 'react'
import { stats } from '../data'
import parse from "html-react-parser"//have html elements in code so to parse then to react using parse for eg. {parse(title)}
//in title we have html element </br> to parse it in react using parse npm i html-react-parse
const Stats =() => {
  return (
    <>
        {stats.map(({no,title},index)=>
            {
                return(
                    <div className="stats__box" key={index}>
                        <h3 className="stats__no">{no}</h3>
                        <p className="stats__title">{parse(title)}</p>
                    </div>
                )
            })}
    </>
  )
}

export default Stats
