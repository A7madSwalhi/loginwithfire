import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ForgetPassword() {
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
    <>
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4 ">Password Reset</h2>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            {/* {message && <Alert variant="success">{message}</Alert>} */}
            <Form onSubmit="">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Button className="w-100 mt-3" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/register">Sign Up</Link>
        </div>
      </>
    </>
  );
}

export default ForgetPassword;
