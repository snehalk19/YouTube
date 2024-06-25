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
];

const ButtonList = () => {
  return (
    <div className="flex w-full ml-10 overflow-x-scroll  ">
      {list.map((element) => (
        <Button name={element} key={element} />
      ))}
    </div>
  );
};

export default ButtonList;
