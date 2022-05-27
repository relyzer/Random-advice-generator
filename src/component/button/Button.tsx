import React from "react";
import "./Button.css"

type Props = {
  content?: string;
  imagePath?: string;
  imageAlt?: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ content, imagePath, imageAlt, onClickHandler }: Props): React.ReactElement => {
  return (
    <button className="round-button" type="button" onClick={onClickHandler}>
      {content}
      {imagePath && (
        <img
          src={imagePath}
          alt={imageAlt}
          className="button-image"
        />
      )}
    </button>
  );
};

export default Button;
