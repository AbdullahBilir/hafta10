import { useEffect, useState } from "react";

function C1({ sayac, setSayac }) {
  useEffect(() => {
    console.log("C1 render oldu");
  }, []);
  return (
    <>
      <div className="bg-succes-subtle p-3">
        Ben bir c1 komponentiyim
        <button
          onClick={() => {
            setSayac((eskideğer) => eskideğer + 1);
          }}
        >
          {sayac}
        </button>
      </div>
    </>
  );
}

export default C1;
