import React from 'react'
import './Homepage.css'
const Homepage = () => {
  const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [arr, setArr] = React.useState([{name, email, phone, address}])
    function handleSubmit(e) {
        e.preventDefault()
        setArr([...arr, { name, email, phone, address }])
        
        console.log(arr)
    }
    return (
    <div className='cover-outer'>
       <h1 className='heading'>Fitness Club Registration</h1>
       <form className='form'>
            <div className='wrapper'>
            <div className='form-group'>
                
                <input type='text' className='input' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            <div className='form-group'>
                
                <input type='text' className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            <div className='form-group'>
                
                <input type='text' className='input' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
            <div className='form-group'>
              
                <input type='text' className='input' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <button type='submit' style={{display:"block",margin:"auto" ,padding:"10px 12px", background:"blue", color:"white"}}onClick={handleSubmit}>Add Member</button>
                </div>
                </form> 
                <br />
                <button >View Member List</button>
                <br />
                <div>
                    
                </div>
    </div>
  )
}

export default Homepage