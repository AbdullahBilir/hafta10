import { useState } from "react";
import C1 from "./C1";

function App() {
  const [closec1, openc1] = useState(false);
  const [sayac, setSayac] = useState(0);

  return (
    <>
      <div className="container bg-info-subtle p-5 my-5">
        <button
          onClick={() => {
            openc1(!closec1);
          }}
          className="btn btn-warning btn-sm my-2"
        >
          C1 Kapat
        </button>
        {!closec1 && <C1 sayac={sayac} setSayac={setSayac} />}
      </div>
    </>
  );
}

export default App;
