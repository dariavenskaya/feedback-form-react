import React from 'react';
import '../styles/Form.scss'

function Form(){

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [tel, setTel] = React.useState();
    const [bDay, setBDay] = React.useState();
    const [message, setMessage] = React.useState('');

    const toDay= new Date().toISOString().substring(0, 10);

  const changeNameToUpperCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result: string = event.target.value.toUpperCase();

    setMessage(result);
  };

    return(
        <>
        <form action="#">
            <div className="name">
            <input id="name" name="name" autoFocus type="text" placeholder="enter your name" value={message}
        onChange={changeNameToUpperCase}/>
            </div>
            <div className="email">
            <input id="email" name="email" type="email" placeholder="enter your email"/>
            </div>
            <div className="short-fields">
            <div className="tel">
            <label htmlFor="tel">Phone number:</label>
            <input id="tel" name="tel" type="tel" placeholder="+7 ___ ___-____" pattern="+7 ___ ___-____"/>
            </div>
            <div className="b-day">
            <label htmlFor="b-day">Birthday:</label>
            <input id="b-day" name="b-day" type="date" defaultValue={toDay} min="1900-01-01" max={toDay}/>
            </div>
            </div>
            <textarea name="message" id="messafe" cols={20} 
                rows={5} placeholder="enter your message..."></textarea>
            <button type="submit">Send</button>
        </form>
        </>
    )
}
export default Form;