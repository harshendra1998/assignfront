import React,{useState} from 'react'
import axios from 'axios'

export default function Contact() {
    const [email, setemail] = useState('')
    const [comment, setcomment] = useState('')
    const [worked, setworked] = useState(false);
    const [clicked, setclicked] = useState(false);

    const submitomment = () => {
      const token = localStorage.getItem("token")
      axios.post('http://localhost:8000/comment',{email,comment},{
        headers: {
          'x-access-token': token
        }}).then(d=>{setworked(true)}).catch(e=>{setworked(false);console.log(e)}).finally(()=>setclicked(true))
    }

  return (<>
    <h1 className='paddinghorizontal'>Contact us</h1>
    <div className='centerinchild flexcol'>
      <div className='flexcol boxcomment'>
        <h2 style={{alignText:'center', width:'100%'}}>Contact us</h2>
        <p>email:</p>
        <input value={email} onChange={e=>setemail(e.target.value)}></input>
        <p>Comment:</p>
        <textarea value={comment} type={'text'} onChange={e=>setcomment(e.target.value)}></textarea>
        {clicked ? (worked ? <p  style={{ fontSize: "0.9rem", color: "green" }}>* Saved your Comment</p>:<p  style={{ fontSize: "0.9rem", color: "red" }}>* Some Problem occured</p>):null}
        <button className='button' onClick={()=>submitomment()} style={{margin:10}}>submit</button>
    </div>
    </div>
    </>
  )
}
