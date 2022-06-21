const Contacts = (props) => {
  const listContacts = props.formData.map((data, i) => {
    const imageToString = String(data.img)
    const altToString = String(data.name)
    
    const fullContact = (
      <ul key={i}>
        <li>{data.name}</li>
        <li>{data.email}</li>
        <li>{data.phone}</li>
        <li><img className="list-img" src={imageToString} alt={altToString}/></li>
      </ul>
    )
    return fullContact;
  })


  return (
    <div>
      {listContacts}
    </div>
  )
}

export default Contacts;