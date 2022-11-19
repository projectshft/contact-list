import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const New = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber]= useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState(`https://source.unsplash.com/random?sig=${props.generateId()}`)
    

    const handleSubmitContactClick = () => {
        if(name.length <1 || number.length <1 || email.length<1 ){
            alert('all fields are required')
            return
        }
        else if(isNaN(number)){
            alert('Number field must contain a number')
            return
        }
      
        const contactId = props.generateId(); 

        props.addContact({
          name,
          number,
          email,
          contactId,
          img,
        })

        props.history.push('/')
      }

    return (
        <div>
            <Link to='/'>Back</Link>
          <form>
            <label>Name</label>
            <input  type='text' className='form-control'onChange={event =>
              setName(event.target.value)
            } required="required"/>
    
            <br/>
    
            <label>Number</label>
            <input type='text' className='form-control'onChange={event =>
              setNumber(parseInt(event.target.value, 10))
            } required="required"/>
    
            <br/>
    
            <label>Email</label>
            <input type='text' className='form-control'onChange={event =>
              setEmail(event.target.value)
            } required="required"/>
            <br/>
            <label>Img (input URL or leave blank to generate random)</label>
            <input placeholder={img} type='text' className='form-control'onChange={event =>
              setImg(event.target.value)
            } required="required"/>
    
            <input type="submit" className="btn btn-success" onClick={handleSubmitContactClick} required="required"/>
          </form>
        </div>
      )
    };
    
    export default New
    

