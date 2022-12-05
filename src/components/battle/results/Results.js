import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { startBattle } from '../../General/calculations';
import { Link } from 'react-router-dom';
import Loader from '../../General/loader/loader';
import PlayerPreview from '../PlayerPreview';
import './results.css';

const Results = () => {  

    const [winner, setWinner] = useState({
        login: "",
        userName: "", 
        userImg: "", 
        followers: 0,
        following: 0,
        score: 0
    });
    const [loser, setLoser] = useState({
        login: "",
        userName: "", 
        userImg: "", 
        followers: 0,
        following: 0,
        score: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {search} = useLocation();
    
    const handleError = (error) => {        
        console.error(error);
        setError(true);
    }

    useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const playerOneName = searchParams.get('playerOneName');
    const playerTwoName = searchParams.get('playerTwoName');
    
    startBattle([playerOneName, playerTwoName])
    .then(([winner, loser]) => {        
        setWinner(winner);
        setLoser(loser);           
        })
    .catch((error) => {
        setLoading(false);
        handleError(error);        
    })
    .finally(() => setLoading(false));
}, [search]);
    
    return (
        <div className='results-container'>
            {error ? (
                <div className="errors-container">
                    <h2 className='error'>An error has occurred</h2>                    
                    <Link to='/battle' className="reset">Reset</Link>
                </div>
            ) : 
                loading ? (
                    <Loader/>
            ) : (
                <div className='results-box'>
                    <div className='winner-container'>
                        <h1 className='winner-title'>WINNER</h1>
                        <div className='user-box'>
                            <PlayerPreview
                                userimg={winner.userImg}                        
                                username={winner.login} 
                            >  
                                <p>{winner.userName}</p>
                                <p> followers: {winner.followers}</p>
                                <p> following: {winner.following}</p>
                                <p> score: {winner.score}</p>                         
                            </PlayerPreview>
                        </div>
                    </div>
                    <div className='loser-container'>
                        <h1 className='loser-title'>LOSER</h1>
                        <div className='user-box'>
                            <PlayerPreview
                                userimg={loser.userImg}                        
                                username={loser.login} 
                            >  
                                <p>{loser.userName}</p>
                                <p> followers: {loser.followers}</p>
                                <p> following: {loser.following}</p>
                                <p> score: {loser.score}</p>                         
                            </PlayerPreview>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results;