import "./Profile.css";
import PageNavbar from "../../navbar/PageNavbar";
import Nav from "react-bootstrap/Nav";

function Profile() {
  return (
    <>
      <PageNavbar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-8">
              <h1>Profile</h1>
            </div>
            <div className="col-3 text-center">
              <div>
                <img
                  src="/img/default-avatar.jpg"
                  alt=""
                  className="profile-img"
                />
                <h2>Pepe</h2>
                <small>pepe@gmail.com</small>
                <div className="row">
                  <small className="col-6 d-block text-start">
                    Firstname: Pepe
                  </small>
                  <small className="col-6 d-block text-end">
                    Lastname: Rodriguez
                  </small>
                  <small className="col-6 d-block text-start">
                    Phone: 097000000
                  </small>
                  <small className="d-block text-start">
                    Address: Br. Artigas 2222
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
