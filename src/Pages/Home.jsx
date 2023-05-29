import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>Home screen
            <Link to="/camera">
                <div>Take a picture</div>
            </Link>
        </div>
    );
};

export default Home;