import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricket",
  "Football",
  "Web ",
  "Array",
  "Amazon",
  "AI",
  "Resume",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex  ">
      {list.map((element) => (
        <Button name={element} key={element} />
      ))}
    </div>
  );
};

export default ButtonList;
