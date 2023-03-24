function SignUp() {
  return (
    <>
      <div class="vh-100" style="background-color: #2779e2;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
              <h1 class="text-white mb-4">Sign Up in Manos Creativas</h1>

              <hr class="mx-n3">
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Upload CV</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input class="form-control form-control-lg" id="formFileLg" type="file" />
                    <div class="small text-muted mt-2">
                      Upload your photo (Max file size 50 MB). 
                    </div>
                  </div>
                </div>
              </hr>


              <hr class="mx-n3" />

                <div class="px-5 py-4">
                <button type="submit" class="btn btn-primary btn-lg">
                    Upload
                </button>

              <div class="card" style="border-radius: 15px;">
                <div class="card-body">
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">First name</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" />
                    </div>
                  </div>

                  <div class="card" style="border-radius: 15px;">
                <div class="card-body">
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Last name</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" />
                    </div>
                  </div>

                  <hr class="mx-n3">
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">Email address</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input
                          type="email"
                          class="form-control form-control-lg"
                          placeholder="example@example.com"
                        />
                      </div>
                    </div>
                  </hr>

                  <hr class="mx-n3">
                  <div class="row align-items-center py-3">
                    <div>
                    <h6 class="mb-0">Choose country</h6>
                  <select class="selectpicker countrypicker" data-flag="true" ></select>
                  </div>
                  </div>
                    </hr>

                    <hr class="mx-n3">
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">Street address</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="26 de marzo XXXX"
                        />
                      </div>
                    </div>

                    <hr class="mx-n3">
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">City</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="Montevideo"
                        />
                      </div>

                    </div>

                    <hr class="mx-n3">
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">State/Province</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="Montevideo"
                        />
                      </div>
                    </div>

                    <hr class="mx-n3">
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">Zip / Postal Code</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input
                          type="number"
                          class="form-control form-control-lg"
                          placeholder="2233"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
