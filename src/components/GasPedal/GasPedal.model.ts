// props typing
export interface GasPedalProps {
  id?: string;
  img: string;
  css?: string;
  interval: PedalIntervals;
  handleA(): void;
  handleB(): void;
}

// Pedal Intervals
export type PedalIntervals = {
  a: number;
  b: number;
};
