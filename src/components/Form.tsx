import React from 'react';
import '../styles/Form.scss'

function Form(){

  //name validations

  const [name, setName] = React.useState();
  const [upperName, setUpperName] = React.useState('');
  const [nameDirty, setNameDirty] = React.useState(false);
  const [nameError, setNameError] = React.useState("Name can't be empty");


  const nameHandler = (e: React.ChangeEvent<any>) => {
    setName(e.target.value.toUpperCase())
    // const re = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s\'\-]*)$/gi;
    // if(!re.test(String(e.target.value))){
    //   setNameError("name should consist of latin characters")
    // }
    if(!e.target.value){
      setNameError("name can't be empty")
    }
    else{
      setNameError('')
    }
    console.log(e.target.value)
  }



  //date validations

  const today= new Date().toISOString().substring(0, 10);

  //email validations

  const [email, setEmail] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState("Email can't be empty");

  const emailHandler = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  
    if(!re.test(String(e.target.value).toLocaleLowerCase())){
      setEmailError('Uncorrect email')
    }
    else{
      setEmailError('')
    }
  }

  //phone number validations

  const [tel, setTel] = React.useState();
  const [telDirty, setTelDirty] = React.useState(false);
  const [telError, setTelError] = React.useState("Phone number can't be empty");



  //message validations

  const [message, setMessage] = React.useState('');
  const [messageDirty, setMessageDirty] = React.useState(false);
  const [messageError, setMessageError] = React.useState("Message can't be empty");

  const messageHandler = (e: React.ChangeEvent<any>) => {
    setMessage(e.target.value)
    if((e.target.value).length < 10 || (e.target.value).length > 300){
      setMessageError("Message shoulde over 10 characters and under 300 characters")
      if(!e.target.value){
        setMessageError("Message can't be empty")
      }
    }else{
      setMessageError('')
    }
    console.log((e.target.value).length)
  }

  //blur handler

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'name':
        setNameDirty(true)
        break
      case 'message':
        setMessageDirty(true)
        break
      case 'tel':
        setTelDirty(true)
        break
  
    }
  }

  return(
      <>
      <form autoComplete="off" action="#">
          <div className="name">
          {(nameDirty && nameError) && <div className="error">{nameError}</div>}
          <input onChange={e => nameHandler(e)} value={name} onBlur={blurHandler} id="name" name="name" type="text" placeholder="enter your name" />
          </div>
          <div className="email">
            {(emailDirty && emailError) && <div className="error">{emailError}</div>}
          <input onChange={e => emailHandler(e)} value={email} onBlur={blurHandler} id="email" name="email" type="email" placeholder="enter your email"/>
          </div>
          <div className="short-fields">
            <div className="tel">
              <label htmlFor="tel">Phone number:</label>
              {(telDirty && telError) && <div className="error">{telError}</div>}
              <input onBlur={blurHandler} id="tel" name="tel" type="tel" placeholder="+7 ___ ___-____" pattern="+7 ___ ___-____"/>
            </div>
            <div className="b-day">
              <label htmlFor="b-day">Birthday:</label>
              <input id="b-day" name="b-day" type="date" defaultValue={today} min="1900-01-01" max={today}/>
            </div>
          </div>
          {(messageDirty && messageError) && <div className="error">{messageError}</div>}
          <textarea onChange={e => messageHandler(e)} value={message} onBlur={blurHandler} name="message" id="message" rows={3}
               placeholder="enter your message..." ></textarea>
          <button type="submit">Send</button>
      </form>
      </>
  )
}
export default Form;