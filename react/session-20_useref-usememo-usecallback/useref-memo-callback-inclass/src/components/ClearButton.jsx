import React, { memo } from "react";

const ClearButton = memo(({ handleClear }) => {
  console.log("Render => ClearButton Components");
  return (
    <div>
      <button className="btn btn-warning" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
});

export default ClearButton;
