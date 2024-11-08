import { PropTypes } from "prop-types";
import{Link} from "react-router-dom";

const About = () => {
    return (
        <div className = "container mt-5">
            <h1> welcome to About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum nobis asperiores laboriosam maiores iste quae repellendus ipsam voluptas animi distinctio itaque accusantium officiis nam repellat doloremque, hic nesciunt dolores ullam vel porro optio eum sapiente. Delectus deleniti eius autem assumenda fugiat quis itaque possimus laborum ipsum! Placeat, nulla delectus?
            </p>
            <div>
                <Link to="/" ClassName = "btn btn-primary">GoHome</Link>
            </div>
        </div>
    );
};

About.propTypes = {
    setMethod: PropTypes.func
};

export default About;