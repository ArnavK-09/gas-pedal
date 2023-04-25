import {
  Fragment,
  component$,
  h,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

export const decelerate = function decelerate(props, state) {
  clearInterval(state.a_timer);
  state.b_timer = setInterval(props.handleB, props.interval.b);
};
export const accelerate = function accelerate(props, state) {
  clearInterval(state.b_timer);
  state.a_timer = setInterval(props.handleA, props.interval.a);
};
export const GasPedal = component$((props) => {
  useStylesScoped$(STYLES);

  const state = useStore({ a_timer: null, b_timer: null });

  return (
    <Fragment>
      <div id={props.id}>
        <button
          type="button"
          onTouchStart$={(event) => accelerate(props, state)}
          onTouchEnd$={(event) => decelerate(props, state)}
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
