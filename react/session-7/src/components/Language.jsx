import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

export const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Container
      className="p-4 rounded-4 h-100 lang-card"
      style={{ background: "#ffdab9" }}
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container className="img-deneme">
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6 py-2">{name}</h3>
        </Container>
      )}

      {!showImage && (
        <ul classname="h-100 d-flex flex-column ul-deneme">
          {options.map((item, index) => {
            return (
              <li className="h5 text-start" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};
