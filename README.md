# ⛽ Gas Pedal

Gas Pedal is a cross-framework component for creating realistic and interactive gas pedals for your web applications. It supports multiple frameworks such as qwik, webcomponent, Vue, solid, svelte, and Marko. It is easy to use, customizable, and accessible.

## Features

- Customizable gas pedal animation
- Touch support for accessibility and convenience
- Customizable color, size, shape, and id of the gas pedal
- Events and callbacks for interacting with the gas pedal state
- Framework-agnostic implementation that works with any web framework

## Usage
Checkout at [This file](https://github.com/ArnavK-09/gas-pedal/blob/main/usage/svelte/src/routes/+page.svelte)

## Props

You can pass the following props to the GasPedal component to customize its appearance and behavior:

| Prop      | Type     | Default | Description                                                                 |
| --------- | -------- | ------- | --------------------------------------------------------------------------- |
| id        | string   |"gasPedal"| The id of the gas pedal                                                    |
| img       | string   | "..."   | The image of gas pedal                                                      |
| css       | string   | ""      | Custom css for gas pedal                                                    |
| interval  | PedalIntervals | {a: 200,b: 100} | Intervals for triggering accelerator & brake                  |
| handleA   | function | () => console.log("Accelerating")   | A callback function that is called when the gas pedal is pressed            |
| handleB | function | () => console.log("Deaccelerating")    | A callback function that is called when the gas pedal is released              |

More at [Props Types](https://github.com/ArnavK-09/gas-pedal/blob/main/src/components/GasPedal/GasPedal.model.ts)...

## Contributing 

Gas Pedal is an open source project and welcomes contributions from anyone. If you are interested in contributing, please follow these steps:

- Fork the repository on GitHub.
- Clone your fork to your local machine.
- Create a new branch for your feature or bug fix.
- Write code and tests that implement your feature or fix your bug.
- Run `npm run fmt` and `npm run build` to check your code quality.
- Commit and push your changes to your branch.
- Open a pull request on GitHub and describe your changes.

