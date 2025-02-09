"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";

const balls = import.meta.glob("./asy/cibo-*.asy", {
  eager: true,
  import: "default",
  query: { w: 120 },
});

export default function Visualizer({ variables, state }) {
  function position(x) {
    return [x == 0 ? 2.2 : 0.5 * x + 2.4, 1.4];
  }

  return (
    <>
      <Canvas scale={130}>
        {range(state.N - state.pos).map((x) => {
          let i = state.pos + x;
          let pos = position(x);
          return <Sprite
            key={i}
            src={balls[`./asy/cibo-${state.queue[i]}.asy`]}
            alt={state.queue[i]}
            x={pos[0]}
            y={pos[1]}
          />
        })}
        <Sprite src={bunny} alt="Tip-Tap" x={1.6} y={0.9} follow />
      </Canvas>
      <Variables variables={variables} />
    </>
  );
}
