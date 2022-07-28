import React, { useState } from "react";

export default function About() {
  const [tabno, setTabno] = useState(1);
  return (<>
    <h1 className="paddinghorizontal">About</h1>
    <div className="childspage fontbig" style={{width:'80%', height:'80%', margin:25}}>
      <div style={{width:'50%', display:'flex'}}>
        <button
          style={{ backgroundColor: tabno === 1 ? "#aaa" : "#ddd", fontSize:'1.3rem', flex:1 }}
          onClick={() => setTabno(1)}
        >
          Tab 1
        </button>
        <button
          style={{ backgroundColor: tabno === 2 ? "#aaa" : "#ddd", fontSize:'1.3rem', flex:1 }}
          onClick={() => setTabno(2)}
        >
          Tab 2
        </button>
        <button
          style={{ backgroundColor: tabno === 3 ? "#aaa" : "#ddd", fontSize:'1.3rem', flex:1 }}
          onClick={() => setTabno(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="centerinchild" style={{backgroundColor:'white'}}>Tab {tabno}</div>
    </div></>
  );
}
