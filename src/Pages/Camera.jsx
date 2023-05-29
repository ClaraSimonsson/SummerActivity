import { useNavigate } from "react-router-dom";

const Camera = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <div><h1>Camera page</h1></div>
        </div>
    );
};

export default Camera;