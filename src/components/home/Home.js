import { Link } from "react-router-dom";
import './home.css';

const Home = () => {   
    return( 
    <div className="home-container">
        <h1>Githab Battle: Battele you friends ... and stuff</h1>
        <Link to='battle' target='_blank' className="button">Battele</Link>
    </div>
    );
}

export default Home;
 