import { css } from "solid-styled-components";

function GasPedal(props) {
  return (
    <>
      <div id={props.id}>
        <button
          type="button"
          onTouchStart={(event) => accelerate}
          onTouchEnd={(event) => decelerate}
        >
          <img alt="Gas Pedal" src={props.img} />
        </button>
      </div>
    </>
  );
}

export default GasPedal;
