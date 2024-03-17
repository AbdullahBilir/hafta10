import { useState } from "react";
import C1 from "./C1";

function App() {
  const [c1kapılı, c1Ackapa] = useState(false);

  return (
    <>
      <div className="container my-5">
        <button
          className="btn btn-success"
          onClick={() => {
            c1Ackapa((eskideger) => !eskideger);
          }}
        >
          c1 Ac kapa
        </button>

        {!c1kapılı && <C1 />}
      </div>
    </>
  );
}

export default App;
