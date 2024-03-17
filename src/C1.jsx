import { useEffect, useState } from "react";

function C1() {
  const [sayac, setSayac] = useState(0);
  const [baglantı, setbaglantı] = useState(navigator.online);

  useEffect(() => {
    function pencereDeğişti(e) {
      const yataymı = e.target.innerWidth / e.target.innerHeight;
      yataymı > 1 ? console.log("yatay") : console.log("dikey");
    }

    window.addEventListener("resize", pencereDeğişti);

    return () => {
      window.removeEventListener("resize", pencereDeğişti);
    };
  }, []);

  useEffect(() => {
    const surekliİslem = setInterval(() => {}, 1000);

    return () => {
      clearInterval(surekliİslem);
    };
  });

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
      {baglantı && (
        <div className="alert alert-danger p-3 position-fixed">
          bAĞLANTI YOK
        </div>
      )}
    </>
  );
}

export default C1;
