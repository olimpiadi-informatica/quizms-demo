import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "QuizMS - IOI Demo",
  description: "QuizMS - Demo at IOI 2025",
};

export default function App() {
  return (
    <NoAuth contestName="IOI Demo" contestLongName={metadata.description} duration={30}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
