import dynamic from "next/dynamic";
const App = dynamic(() => import("@/components/app"), { ssr: false })

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen flex items-center justify-center">
        <App/>
      </div>
      <div className="h-screen w-screen flex items-center justify-center bg-black-600">
          <h1 className="text-8xl text-white">Hello, World!</h1>
      </div>
    </main>
  )
}