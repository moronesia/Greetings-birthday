import React from "react";
import ParticlesBg from "particles-bg";
import "./gift.css";

function gift() {

  return (
    <>
      <div>
        <ParticlesBg type="color" bg={true} />
      </div>
      <div>
        <button id="spin">Spin</button>
        <span className="arrow"></span>
        <div className="spinning">
          <div className="one">laptop</div>
          <div className="two">Motor</div>
          <div className="three">Mobil</div>
          <div className="four">Iphone</div>
          <div className="five">Sepatu</div>
          <div className="six">Tas</div>
          <div className="seven">Topi</div>
          <div className="eight">Zonk</div>
        </div>
      </div>
    </>
  );
}

export default gift;
