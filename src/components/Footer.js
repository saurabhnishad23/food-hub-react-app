import React, { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div className="m-2 px-[200] bg-slate-600 text-cyan-500">
      RandomFooter: This webite is made by {user.name}
    </div>
  );
};

export default Footer;
