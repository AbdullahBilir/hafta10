import { useEffect, useState } from "react";

function C1() {
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    const surekliIslem = setInterval(() => {
      console.log("interval çalıştı");
    }, 2000);

    return () => {
      clearInterval(surekliIslem);
    };
  }, []);

  return (
    <>
      <div className="p-3 m-3 bg-success-subtle">
        C1 Komponent
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            setSayac((eskideger) => eskideger + 5);
          }}
        >
          {sayac}
        </button>
      </div>
    </>
  );
}

export default C1;
