import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function GasPedal(props) {
  const [a_timer, setA_timer] = createSignal(null);

  const [b_timer, setB_timer] = createSignal(null);

  function decelerate() {
    clearInterval(a_timer());
    setB_timer(setInterval(props.handleB, props.interval.b));
  }

  function accelerate() {
    clearInterval(b_timer());
    setA_timer(setInterval(props.handleA, props.interval.a));
  }

  return (
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
  );
}

export default GasPedal;
