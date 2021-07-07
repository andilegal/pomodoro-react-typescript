import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button({ text, onClick, className }: Props): JSX.Element {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
