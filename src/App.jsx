import { useEffect, useState } from "react";
import C1 from "./C1";

function App() {
  const [c1kapalı, c1AcKapa] = useState(false);
  const [sayac, setSayac] = useState(0);

  function c1kapat() {
    c1AcKapa((eskiDeger) => !eskiDeger);
  }

  return (
    <div className="container my-5 bg-info-subtle p-5">
      <button onClick={c1kapat} className="btn btn-warning btn-sm my-3">
        C1 Kapat
      </button>

      {!c1kapalı && <C1 sayac={sayac} setSayac={setSayac} />}
    </div>
  );
}

export default App;
