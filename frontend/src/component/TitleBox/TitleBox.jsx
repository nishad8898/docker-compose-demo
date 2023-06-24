/* eslint-disable react/prop-types */

import "./TitleBox.scss";

function TitleBox({ image, title }) {
  return (
    <div className="title-box">
      <img src={image} className="title-image" alt="logo" />
      <h3>{title}</h3>
    </div>
  );
}

export default TitleBox;
