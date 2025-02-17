import React from "react";

export default function Contributers() {
  return (
    <div className="container-fluid contributerscomp">
      <div className="text-center shine-parent  ">
        <h5 className="card-head-contributer my-2 btn-shine">✦ Creator</h5>
        <h5 className="mb-4">
          This project is made by Chirag mehroliya. <br />
          The Creator:
        </h5>
      </div>

      <div className="row justify-content-center py-3">
        <div className="col-sm-3">
          <div className="contributer-card card text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png"
              alt="Avatar"
              className="card-img-top rounded-circle contributer-img m-auto "
            />
            <div className="card-body">
              <h4>Chirag Mehroliya</h4>
              <p className="card-text">Frontend Developer</p>
              <a
                href="https://www.linkedin.com/in/chirag-mehroliya-196111293/"
                target="_blank"
                className="fw-bold px-3 py-2 download-btn link-btn"
              >
                LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
