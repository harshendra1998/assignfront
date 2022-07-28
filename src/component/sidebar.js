import React from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
    const data = useSelector((state) => state);
  return (
    <div className="sidebar">
          <p className='fontbig' style={{padding:'1rem'}}>Counter : {data.data}</p>
        </div>
  )
}
