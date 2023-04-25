import { Fragment, component$, h, useStylesScoped$ } from "@builder.io/qwik";

export const GasPedal = component$((props) => {
  useStylesScoped$(STYLES);

  return (
    <Fragment>
      <div id={props.id}>
        <button
          type="button"
          onTouchStart$={(event) => accelerate}
          onTouchEnd$={(event) => decelerate}
        >
          <img alt="Gas Pedal" src={props.img} />
        </button>
      </div>
    </Fragment>
  );
});

export default GasPedal;

export const STYLES = `
#gasPedal {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;
