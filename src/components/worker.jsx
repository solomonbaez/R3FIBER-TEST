import dynamic from "next/dynamic";
import { render } from '@react-three/offscreen'

const AppScene = dynamic(() => import("./Scene"), { ssr: false })

render(<AppScene />)
