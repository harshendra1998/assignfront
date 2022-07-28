import React from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch()
  return (<>
    <h1 className='paddinghorizontal'>Home</h1>
    <div className='childspage centerinchild'>
        <button style={{margin:'10px', fontSize:'2rem', backgroundColor:data.data<=0?'#444':'#ccc' }} disabled={data.data<=0} onClick={()=>dispatch({type:'REMOVE'})}>Subtract</button>
        <button style={{margin:'10px', fontSize:'2rem', backgroundColor:data.data>=10?'#444':'#ccc'}} disabled={data.data>=10} onClick={()=>dispatch({type:'ADD'})}>Add</button>
    </div>
    </>
  )
}
