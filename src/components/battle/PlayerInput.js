import { useState } from "react";

const PlayerInput = (props) => {  
    const [username, setUserNane] = useState(``);

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        props.onSubmit(props.id, username)       
      }
    return (      
        <form className="form_container" onSubmit={handleSubmit}>
            <label htmlFor={props.id} className="player_title">{props.label}</label>
            <input
                className="player_input"
                id={props.id}
                type='text'
                placeholder="Github Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUserNane(e.target.value)}
            />
            <button className="player_btn"
                disabled={!username}
                type='submit'
            >Submit</button>
        </form>
    );
  }
  
  export default PlayerInput;
  