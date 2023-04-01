import React from "react";


function Signup() {



    return (
  
        <div class="container h-100 ">
          <div class="row h-100 ">
            <div class="col-lg-6 col-xl-6 mx-auto h-100">
              <div class="h-100 flex-row d-flex justify-content-center align-items-center overflow-hidden">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">프레임 가입</h5>
      
                    <div class="form-floating mb-3">
                      <input type="text" oninput="main.userFormCheck.checkId()" class="form-control" id="Username" placeholder="myusername" required autofocus />
                      <label for="Username">아이디</label>

                      <div class="valid-feedback">
                        완벽해요.
                      </div>
                      <div class="invalid-feedback">
                        특수문자는 입력할 수 없어요.
                      </div>
                    </div>
      
                    <div class="form-floating mb-3">
                      <input type="email" oninput="main.userFormCheck.checkEmail()" class="form-control" id="Email" placeholder="myusername" required />
                      <label for="Email">이메일</label>

                      <div class="valid-feedback">
                        멋진 이메일이네요.
                      </div>
                      <div class="invalid-feedback">
                        이메일 형식이 맞지 않아요.
                      </div>
                    </div>
      
                    <div class="form-floating mb-4">
                      <input type="password" oninput="main.userFormCheck.checkPassword()" class="form-control" id="Password" placeholder="Password" />
                      <label for="Password">비밀번호</label>

                      <div class="valid-feedback">
                        안전해요.
                      </div>
                      <div class="invalid-feedback">
                        비밀번호는 최소 8글자 이상이어야 해요.
                      </div>
                    </div>
      

      
                    <div class="d-grid mb-2">
                      <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" onclick="userSignup()">회원가입</button>
                    </div>
      
                    <a class="d-block text-left mt-2 small" href="/auth/login">로그인 {">"}</a>
      
      
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default Signup;