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

  // intervals
  let a_timer, b_timer;

  // functions
  const accelerate = () => {
    clearInterval(b_timer);
    a_timer = setInterval(props.handleA, props.interval.a);
  };
  const decelerate = () => {
    clearInterval(a_timer);
    b_timer = setInterval(props.handleB, props.interval.b);
  };

  return (
    <>
      <div id={props.id}>
        <button onTouchStart={accelerate} onTouchEnd={decelerate} type="button">
          <img alt="Gas Pedal" src={props.img} />
        </button>
      </div>
    </>
  );
}
