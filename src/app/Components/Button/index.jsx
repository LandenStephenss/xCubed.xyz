import React from "react";
import "./Style.css";
export default React.memo(({ link, children, onClick }) => {
  const Button = (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
  return link ? <a href={link}>{Button}</a> : Button;
});
