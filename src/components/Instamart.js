import React, { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      {!isVisible ? (
        <button
          className="underline cursor-pointer px-2 bg-gray-400 rounded-md"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      ) : (
        <button className="underline" onClick={() => setIsVisible(false)}>
          hide
        </button>
      )}
      <p>{isVisible && description}</p>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <Section
        title={"InstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
    </div>
  );
};

export default Instamart;
