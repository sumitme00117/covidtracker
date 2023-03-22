import React, { useEffect, useState } from 'react'

const Main = (props) => {
 let selectedstate = props.info
  const [active, setActive] = useState(null)
  const [confirmed, setConfirmed] = useState(null)
  const [deaths, setDeaths] = useState(null)
  const [deltaconfirmed, setDeltaConfirmed] = useState(null)
  const [deltadeaths, setDeltaDeaths] = useState(null)
  const [deltarecovered, setDeltaRecovered] = useState(null)

 

   const getData = async ()=>{

   
    const res = await fetch('https://data.covid19india.org/data.json')
    const data = await res.json()
    if(selectedstate == ''){
      
      setActive(data.statewise[1].active)
    setConfirmed(data.statewise[1].confirmed)
    setDeaths(data.statewise[1].deaths)
    setDeltaConfirmed(data.statewise[1].deltaconfirmed)
    setDeltaDeaths(data.statewise[1].deltadeaths)
    setDeltaRecovered(data.statewise[1].deltarecovered)

    }
    let data2= data.statewise.filter((item)=>{
      
      return item.state == selectedstate
    })
    
    setActive(data2[0].active)
    setConfirmed(data2[0].confirmed)
    setDeaths(data2[0].deaths)
    setDeltaConfirmed(data2[0].deltaconfirmed)
    setDeltaDeaths(data2[0].deltadeaths)
    setDeltaRecovered(data2[0].deltarecovered)
  
    
  }
  
  useEffect(()=>{
   getData()
  },[props.info])
  return (
    <div className="container" data-aos="flip-left" data-aos-delay="100">
      <div className="active">
      <h1>Active cases</h1>
      <h3>{active}</h3>
      
      </div>
      <div className="confirmed">
      <h1>Confirmed cases</h1>
      <h3>{confirmed}</h3>
      </div>
      <div className="deaths">
      <h1>Death cases</h1>
      <h3>{deaths}</h3>
      </div>
      <div className="deltaconfirmed">
      <h1>DeltaConfirmed cases</h1>
      <h3>{deltaconfirmed}</h3>
      </div>
      <div className="deltadeaths">
      <h1>Deltadeaths cases</h1>
      <h3>{deltadeaths}</h3>
      </div>
      <div className="deltarecovered">
      <h1>Deltarecovered cases</h1>
      <h3>{deltarecovered}</h3>
      </div>
      
      
      
      
       
    </div>
  )
}

export default Main
