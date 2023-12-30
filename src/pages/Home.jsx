import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Dragon from '../models/Dragon'
import HomeInfo from '../components/HomeInfo'


const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenscale = null 
    let screenPosition = [-4, -5, -35]
    let rotation = [0.2, 0, 0]

    if(window.innerWidth < 768){
      screenscale=[0.9, 0.9, 0.9]
    } else {
      screenscale=[1,1,1]
    }

    return [screenscale, screenPosition, rotation]
  }

  const adjustDragonForScreenSize = () => {
    let screenScale, screenPosition

    if(window.innerWidth < 768){
      screenScale=[15, 15, 15]
      screenPosition = [0, -1, 0]
    } else {
      screenScale=[30, 30, 30]
      screenPosition = [0, -1, 0]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  
  const [dragonScale, dragonPosition] = adjustDragonForScreenSize()
  
  return (
    <section className='w-fukk h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas 
      className={`w-full h-screen bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight
            position={[1,1,1]} intensity={10} 
          />
          <ambientLight intensity={1}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          

          <Bird />
          <Sky isRotating={isRotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Dragon 
            isRotating={isRotating}
            dragonScale={dragonScale}
            dragonPosition={dragonPosition}
            rotation={[0,-30,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home