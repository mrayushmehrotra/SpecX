import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SpecX</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Parent</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
