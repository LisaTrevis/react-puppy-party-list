import React from "react";

const List = ({ dogs }) => {
  return (
    <React.Fragment>
      {dogs.map((dog) => {
        const { id, name, bringing, image } = dog;
        return (
          <section key={id} className="dog">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Bringing: {bringing}</p>
            </div>
          </section>
        );
      })}
    </React.Fragment>
  );
};

export default List;
