// imports
import { useDefaultProps } from "@builder.io/mitosis";
import { GasPedalProps } from "./GasPedal.model";

// props
useDefaultProps({
  id: "gasPedal",
  interval: {
    a: 200,
    b: 100,
  },
  img: "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg",
  handleA: () => console.log("Accelerating"),
  handleB: () => console.log("Deaccelerating"),
});

// component
export default function GasPedal(props: GasPedalProps) {
  // styles
  useStyle(`
  #gasPedal {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
  }`);

  // state
  const state = useStore({
    a_timer: null,
    b_timer: null,
    decelerate() {
      clearInterval(state.a_timer);
      state.b_timer = setInterval(props.handleB, props.interval.b);
    },
    accelerate() {
      clearInterval(state.b_timer);
      state.a_timer = setInterval(props.handleA, props.interval.a);
    },
  });

  return (
    <>
      <div id={props.id}>
        <button
          onTouchStart={() => state.accelerate()}
          onTouchEnd={() => state.decelerate()}
          type="button"
        >
          <img alt="Gas Pedal" src={props.img} />
        </button>
      </div>
    </>
  );
}
