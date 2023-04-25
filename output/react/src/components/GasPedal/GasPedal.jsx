import * as React from "react";
import { useState } from "react";

function GasPedal(props) {
  const [a_timer, setA_timer] = useState(() => null);

  const [b_timer, setB_timer] = useState(() => null);

  function decelerate() {
    clearInterval(a_timer);
    setB_timer(setInterval(props.handleB, props.interval.b));
  }

  function accelerate() {
    clearInterval(b_timer);
    setA_timer(setInterval(props.handleA, props.interval.a));
  }

  return (
    <>
      <>
        <div id={props.id}>
          <button
            type="button"
            onTouchStart={(event) => accelerate()}
            onTouchEnd={(event) => decelerate()}
          >
            <img alt="Gas Pedal" src={props.img} />
          </button>
        </div>
      </>
      <style jsx>{`
        #gasPedal {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </>
  );
}

GasPedal.defaultProps = {
  id: "gasPedal",
  interval: {
    a: 200,
    b: 100,
  },
  img: "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg",
  handleA: () => console.log("Accelerating"),
  handleB: () => console.log("Deaccelerating"),
};

export default GasPedal;
