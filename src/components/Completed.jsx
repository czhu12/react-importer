import React from 'react';
import { CircleProgress, Margin } from './common';


const Completed = ({formattedData}) => {
  return (
    <div>
      <Margin margin="60px" style={{textAlign: 'center'}}>
        <div style={{width: "100px", height: "100px", margin: "0 auto", position: "relative"}}>
          <svg style={{width: "100px", height: "100px", position: "absolute", margin: "auto", top: "0", bottom: "0", left: "0", right: "0"}} viewBox="0 0 100 100">
            <CircleProgress />
          </svg>
          <svg style={{position: "absolute", margin: "auto", top: "0", bottom: "0", left: "0", right: "0"}} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#2ecc71" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
        </div>

        <h2 style={{fontSize: "2em"}}>Success</h2>
        <h3 style={{color: "#95a5a6"}}>{formattedData.length} row{formattedData.length === 1 ? "" : "s"} processed</h3>
      </Margin>
    </div>
  );
};

export default Completed;
