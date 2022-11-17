import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const New = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber]= useState('')
    const [email, setEmail] = useState('')

    const handleSubmitContactClick = () => {
        props.addContact({
          name,
          number,
          email,
        })
        
        props.history.push('/new')
      }

    return (
        <div>
          <form>
            <label>Name</label>
            <input type='text' className='form-control'onChange={event =>
              setName(event.target.value)
            }/>
    
            <br/>
    
            <label>Number</label>
            <input type='text' className='form-control'onChange={event =>
              setNumber(parseInt(event.target.value, 10))
            }/>
    
            <br/>
    
            <label>Email</label>
            <input type='text' className='form-control'onChange={event =>
              setEmail(event.target.value)
            }/>
    
            <button type="button" onClick={handleSubmitContactClick}>Submit</button>
          </form>
    
          <Link to='/'>Home</Link>
        </div>
      )
    };
    
    export default New
    

