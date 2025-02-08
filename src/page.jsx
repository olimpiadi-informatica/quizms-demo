import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Fibonacci 2024/25",
  description: "Giochi di Fibonacci 2024/2025 - Fase 2",
};

export default function App() {
  return (
    <NoAuth contestName="Giochi di Fibonacci" contestLongName={metadata.description} duration={90}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
