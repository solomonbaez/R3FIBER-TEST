"use client";
import ThreeFiberCanvas from "@/components/threeFiberCanvas"

export default function Home() {
  return (
    <main>
      <h1>Hi!</h1>
      {/* interesting note, JSX requires capitalized camel case */}
      <ThreeFiberCanvas /> 
    </main>
  );
}
