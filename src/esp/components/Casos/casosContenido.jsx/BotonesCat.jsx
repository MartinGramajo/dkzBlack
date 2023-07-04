import React from "react";

export const BotonesCat = ({ button, filter }) => {
  return (
    <div className="buttons botones-filtro d-flex flex-wrap flex-sm-row flex-column align-items-start">
      {button.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => filter(cat)}
            className="btn color-naranja me-5 text-start"
          >
            <h3 className="peso-bold">{cat}</h3>
          </button>
        );
      })}
    </div>
  );
};
