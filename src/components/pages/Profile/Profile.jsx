import "./Profile.css";
import PageNavbar from "../../navbar/PageNavbar";
import Nav from "react-bootstrap/Nav";

function Profile() {
  return (
    <>
      <PageNavbar />
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-1 g-0">
              <Nav defaultActiveKey="/home" className="flex-column mt-5">
                <Nav.Link href="/profile" className="px-0">
                  <i className="bi bi-person d-inline me-1"></i>Profile
                </Nav.Link>
                <Nav.Link eventKey="/orders" className="px-0">
                  <i className="bi bi-box-seam d-inline me-1"></i>Orders
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-7">
              <h1>Profile</h1>
            </div>
            <div className="col-4">
              <div className="text-center bg-secondary-subtle p-4 rounded">
                <img
                  src="/img/default-avatar.jpg"
                  alt="Profile photo"
                  className="profile-img rounded-pill"
                />
                <h2 className="mb-0 mt-3">Pepe Rodriguez</h2>
                <small>pepe@gmail.com</small>
                <div className="row mt-5 bg-white p-2">
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Firstname: </small>
                    <small className="fs-6">Pepe</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Lastname: </small>
                    <small className="fs-6">Rodriguez</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fs-6 fw-bold">Phone: </small>
                    <small className="fs-6">091000000</small>
                  </div>
                  <div className="col-6 text-start my-2">
                    <small className="fw-bold fs-6">Birthdate: </small>
                    <small className="fs-6">1/1/1994</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Avatar: </small>
                    <small className="fs-6">default-avatar.jpg</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Email: </small>
                    <small className="fs-6">pepe@gmail.com</small>
                  </div>
                  <div className="col-12 text-start my-2">
                    <small className="fw-bold fs-6">Address: </small>
                    <small className="fs-6">Br. Artigas 2222</small>
                  </div>
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
