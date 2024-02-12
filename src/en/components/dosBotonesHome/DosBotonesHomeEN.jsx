import React from "react";
import BotonTrabajaConNosotrosEN from "./BotonTrabajaConNosotrosEN";
import BotonContactanosEN from "../BotonContactanosEN";

export default function DosBotonesHomeEN() {
  return (
    <div className="container d-flex flex-wrap justify-content-lg-between justify-content-center align-content-between py-4">
      <BotonContactanosEN />
      <BotonTrabajaConNosotrosEN />
    </div>
  );
}
