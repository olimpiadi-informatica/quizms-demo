"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  queue: string[];
  pos: number;
  food_types: Record<string, "verdura" | "frutta">;
};

export default [
  {
    type: "start",
    message0: "inizia qui",
    nextStatement: null,
    colour: 20,
    tooltip: "L'esecuzione inizia da qui",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {},
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "numero di cibi in fila",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "prossimo_cibo",
    message0: "prossimo cibo",
    colour: 20,
    tooltip: "il prossimo cibo in fila",
    fn: (ctx: Context, state: State): string => {
      return state.pos < state.N ? state.queue[state.pos] : ctx.exit(false, "il cibo è finito");
    },
  },
  {
    type: "è_una_verdura",
    message0: "%1 è una verdura",
    colour: 20,
    tooltip: "se il cibo dato è una verdura",
    fn: (ctx: Context, state: State, x: string): boolean => {
      const food = x.split(" ")[0];
      if (food in state.food_types) return state.food_types[food] === "verdura";
      ctx.exit(false, `non conosco il cibo ${x}`);
    },
  },
  {
    type: "cuoci",
    message0: "cuoci %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "cuoci il cibo dato",
    fn: (ctx: Context, state: State, x: string) => {
      if (state.pos >= state.N) ctx.exit(false, "hai finito il cibo");
      if (state.queue[state.pos] !== x) ctx.exit(false, "questo non è il prossimo cibo");
      if (state.queue[state.pos].split(" ").length > 1)
        ctx.exit(false, "stai cuocendo un cibo già cotto");
      state.queue[state.pos] += " cotta";
    },
  },
  {
    type: "mangia",
    message0: "mangia %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "mangia il cibo dato",
    fn: (ctx: Context, state: State, x: string) => {
      if (state.pos >= state.N) ctx.exit(false, "hai finito il cibo");
      if (state.queue[state.pos] !== x) ctx.exit(false, "questo non è il prossimo cibo");
      const food = state.queue[state.pos].split(" ");
      if (!(food[0] in state.food_types)) ctx.exit(false, `non conosco il cibo ${food[0]}`);
      if (state.food_types[food[0]] === "verdura" && food.length === 1)
        ctx.exit(false, "a Tip-Tap non piace la verdura cruda");
      if (state.food_types[food[0]] === "frutta" && food.length > 1)
        ctx.exit(false, "a Tip-Tap non piace la frutta cotta");
      state.pos += 1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di mangiare",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "non hai finito il cibo");
      ctx.exit(true, "hai finito tutto il cibo, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
