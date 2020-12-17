import React, { useEffect } from "react";

const Henlo = () => {
  useEffect(() => {
    console.log("Henlo has Mounted");

    return () => {
      console.log("Henlo has Unmounted");
    };
  }, []);

  return <div>Henlo</div>;
};

export default Henlo;
