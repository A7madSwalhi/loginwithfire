import Logout from "../components/auth/Logout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Home</p>
      <Logout>
        <Link to={"/login"}>
          <button className="btn btn-success">Login</button>
        </Link>
      </Logout>
    </div>
  );
}

export default Home;
