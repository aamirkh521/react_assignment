import React from "react";

export default function Base({
    title="SpaceX Launch Programs",
    children,
    className="bg-light"
}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron bg-light text-left">
          <h2>{title}</h2>         
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-light ">
        <div className="container text-center">
          <span className="text-muted">Developed By <span>aamir@dev</span></span>
        </div>
      </footer>
    </div>
  );
}
