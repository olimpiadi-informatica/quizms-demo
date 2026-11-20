"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import stoveOn from "./asy/fornello-acceso.asy?w=120";
import stoveBack from "./asy/fornello-retro.asy?w=120";
import stoveOff from "./asy/fornello-spento.asy?w=120";
import type { State } from "./s1.blocks";

const foods = import.meta.glob<Image>("./asy/cibo-*.asy", {
  eager: true,
  import: "default",
  query: { w: 120 },
});

// One visualizer per language, imported by the matching `question.*.mdx`.
export default function Visualizer(props: VisualizerProps<State>) {
  return <BaseVisualizer {...props} english={false} />;
}

export function VisualizerEn(props: VisualizerProps<State>) {
  return <BaseVisualizer {...props} english />;
}

function BaseVisualizer({
  variables,
  state,
  english,
}: VisualizerProps<State> & { english: boolean }) {
  const stove = english ? "Stove" : "Fornello";

  function position(x: number, cook: boolean): [number, number] {
    if (x === -1) return [1.4, 1.3];
    if (cook) return [2.2, 1.5];
    return [0.5 * x + 2.4, 1.3];
  }

  return (
    <>
      <Canvas scale={130}>
        <Sprite src={bunny} alt="Tip-Tap" x={1.6} y={0.9} follow />
        <Sprite src={stoveBack} alt={stove} x={2.2} y={1.5} />
        {range(Math.max(state.pos - 1, 0), state.N).map((i) => {
          const pos = position(i - state.pos, state.queue[i].endsWith(" cotta"));
          return (
            <Sprite
              key={i}
              src={foods[`./asy/cibo-${state.queue[i].split(" ")[0]}.asy`]}
              alt={state.queue[i]}
              x={pos[0]}
              y={pos[1]}
            />
          );
        })}
        <Sprite
          src={
            state.pos < state.N && state.queue[state.pos].endsWith(" cotta") ? stoveOn : stoveOff
          }
          alt={stove}
          x={2.2}
          y={1.5}
        />
      </Canvas>
      <Variables
        variables={{ ...variables, [english ? "N (no. of foods)" : "N (num. cibi)"]: state.N }}
      />
    </>
  );
}
