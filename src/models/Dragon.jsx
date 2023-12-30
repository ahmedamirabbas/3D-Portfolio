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
      <mesh {...props} ref={ref}>
          <primitive object={scene} />
      </mesh>
    )
}

export default Dragon