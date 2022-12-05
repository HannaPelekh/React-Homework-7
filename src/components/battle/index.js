import React from 'react';
import { useState, Children } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

import './battle.css';

const Battle = () => {  
  const [playerOneName, setPlayerOneName] = useState(``);
  const [playerTwoName, setPlayerTwoName] = useState(``);
  const [playerOneImage, setPlayerOneImage] = useState(``);
  const [playerTwoImage, setPlayerTwoImage] = useState(``);

  const location = useLocation();

  const handleSubmit = (id, username) =>{
    if(id === 'playerOne'){
      setPlayerOneName(username);
      setPlayerOneImage(`https://github.com/${username}.png?size=200`);
    }else{
      setPlayerTwoName(username);
      setPlayerTwoImage(`https://github.com/${username}.png?size=200`);
    }        
  }
  const handleReset = (id) =>{
    if(id === 'playerOne'){
      setPlayerOneName(``);
      setPlayerOneImage(``);
    }else{
      setPlayerTwoName(``);
      setPlayerTwoImage(``);
    }        
  }
    return (
      <div className='battle-container'>
        <div className='battle-users'>
          {!playerOneImage ? 
            <PlayerInput
              label="Player 1"
              id='playerOne'
              onSubmit={handleSubmit}
            /> : 
            <PlayerPreview
              userimg={playerOneImage}
              username={playerOneName} 
            >
              <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
            </PlayerPreview>
          }
          {!playerTwoImage ? 
            <PlayerInput
              label="Player 2"
              id='playerTwo'
              onSubmit={handleSubmit}
            /> :
            <PlayerPreview
              userimg={playerTwoImage}
              username={playerTwoName}  
            >
              <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
            </PlayerPreview>
          }
        </div>
        {playerOneImage && playerTwoImage && (
          <Link
              to={{
                  pathname: `${location.pathname}/results`,
                  search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
              }}
              className='battle-btn'>
              Battle
          </Link>
        )}
      </div>
    );
  }
  
  export default Battle;
  