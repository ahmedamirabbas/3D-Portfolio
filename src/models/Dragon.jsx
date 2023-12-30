import {useEffect, useRef} from 'react'

import dragonScene from '../assets/3d/dragon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Dragon = ({isRotating, ...props}) => {
  const ref = useRef()  
  const {scene, animations} = useGLTF(dragonScene)
    const {actions} = useAnimations(animations, ref)

    useEffect(() => {
      if(isRotating) {
        actions ['Hover'].play()
        actions['Idle'].stop()
      } else {
        actions['Idle'].play()
        actions ['Hover'].stop()
      }
    }, [actions, isRotating])
  
    return (
      <mesh {...props} ref={ref}
      position={[0, -1, 2]} scale={[30,30,30]} rotation={[0,-30,0]}
      {...props}>
          <primitive object={scene} />
      </mesh>
    )
}

export default Dragon