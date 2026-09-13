import { useState } from "react";
import data from "../data.json";
import "./Technologies.css";

function Technologies() {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    setStack([...stack, technology]);
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="technologies">

      {/* Heading */}
      <div className="technologies-header">
        <h1>
          Explore the <span>Technologies</span>
        </h1>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      {/* Cards + Your Stack */}
      <div className="technologies-content">

        {/* Technology Cards */}
        <div className="technology-grid">

          {data.map((technology) => (
            <div className="technology-card" key={technology.id}>

              <div className="card-top">
                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <span className="badge">
                  {technology.badge}
                </span>
              </div>

              <h2>{technology.name}</h2>

              <p>
                {technology.description}
              </p>

              <div className="card-info">
                <span>{technology.category}</span>
                <span>{technology.level}</span>
                <span>⭐ {technology.rating}</span>
              </div>

              <button
                onClick={() => addToStack(technology)}
              >
                Add to Stack
              </button>

            </div>
          ))}

        </div>


        {/* Your Stack */}
        <div className="your-stack">

          <h2>Your Stack</h2>

          <p>
            {stack.length} Technology Selected
          </p>

          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>

              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div>
                <h3>{technology.name}</h3>
                <small>{technology.category}</small>
              </div>

              <button
                onClick={() => removeFromStack(technology.id)}
              >
                ×
              </button>

            </div>
          ))}

          <button
            className="remove-all"
            onClick={removeAll}
          >
            Remove All
          </button>

        </div>

      </div>

    </section>
  );
}

export default Technologies;