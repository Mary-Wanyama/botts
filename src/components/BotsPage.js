import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
 const Api = 'http://localhost:8002/bots'

  const [bots, setbots] = useState([])

useEffect(()=> {
fetch(Api)
.then(res=>res.json())
.then(setbots)
.catch(error=>console.log(error))
},[])

function updateArmy(id) {
  setbots(bots.map(bot=> id === bot.id? {...bot, isArmy:true} : bot))
}
function removeUpdateArmy(id) {
  setbots(bots.map(bot=> id === bot.id? {...bot, isArmy:false} : bot))
}

function permanentDelete(id) {
  setbots(bots.filter(bot=> id !== bot.id))
}

  return (
    <div>
      <YourBotArmy bots={bots.filter(bot => bot.isArmy)} 
      handleDelete={permanentDelete}
      handleClick={removeUpdateArmy}/>
      <BotCollection bots={bots} 
      handleDelete={permanentDelete}
      handleClick={updateArmy}/>
    </div>
  )
}

export default BotsPage;
