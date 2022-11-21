import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDelete}) {


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {bots.map(bot=> <BotCard key={bot.id} bot={bot} handleDelete={handleDelete} handleClick={handleClick}/>)}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
