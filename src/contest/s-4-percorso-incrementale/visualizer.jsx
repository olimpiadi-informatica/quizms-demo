"use client";

import bunny from "./asy/bunny.asy?w=66";
import { range } from "lodash-es";
import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

export default function Visualizer({ variables, state }) {
  const cell_side = 20;
  const cell_padding = 1;
  const scale = 10;
  const font_height = 4;
  return <>
    <Canvas gravity="bottom" scale={scale}>
      {
        range(state.N).map((i) =>
            <Rectangle
              color="transparent"
              width={cell_side}
              height={cell_side}
              key={"rect" + i}
              x={cell_side * i}
              y={font_height*3+1}
            >
            <Rectangle
              color={{W: "white", B: "black"}[state.cols[i]]}
              width={cell_side-2*cell_padding}
              height={cell_side-2*cell_padding}
              x={cell_padding}
              y={cell_padding}
            />
          </Rectangle>
        )
      }
      <Sprite src={bunny} alt="Bunny" x={cell_side*(state.pos+0.5) - 3.5} y={font_height*3+1} follow />
      <Rectangle style={{
          overflow: "hidden",
          padding: "5px",
          textAlign: "center",
          borderRadius: "10px",
      }} x ={cell_side*(state.pos)} y={0} height={font_height*3} width={cell_side}>
        {range(state.M).map((i) => <Rectangle key={`instr-${i}`} 
          style={{
            border: "None",
            textAlign: "center",
            fontSize: `${scale*font_height}px`,
            lineHeight: `${scale*font_height}px`,
            fontWeight: i == state.i ? "bold":"normal",
          }}
          y={(-i+state.i+2)*font_height}
          width={cell_side}
          >
            {{"S":"SALTA", "A":"AVANZA"}[state.instr[i]]}
        </Rectangle>)}
      </Rectangle>
    </Canvas>
    <Variables variables={{
      ...variables,
      "numero di caselle": state.N,
      "numero di istruzioni": state.M,
      posizione: state.pos + 1,
      "istruzione n°": state.i + 1,
    }} />
  </>;
}
