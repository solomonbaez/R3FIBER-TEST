"use client";
import ThreeFiberCanvas from "@/components/threeFiberCanvas"

export default function Home() {
  return (
    <main>
      {/* interesting note, JSX requires capitalized camel case */}
      <ThreeFiberCanvas /> 
    </main>
  );
}
