import "../dash.css";
import Logout from "../components/auth/Logout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Create a new <link> element for Bootstrap
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";

    // Append the Bootstrap <link> tag to the <head> of the document
    document.head.appendChild(bootstrapLink);

    // Clean up function to remove Bootstrap styles when the component is unmounted
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);

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
