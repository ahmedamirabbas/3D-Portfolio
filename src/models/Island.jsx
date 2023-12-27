/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'

import islandScene from '../assets/3d/statue.glb'

const Island = (props) => {
  const islandRef = useRef()

  const { nodes, materials } = useGLTF(islandScene);

  return (
    <a.group ref={islandRef} {...props} >
      <group
        position={[1.977, 7.244, 1.002]}
        rotation={[-Math.PI / 2, 0, -1.359]}
        scale={1.31}
      >
        <mesh
          name="PartF_PartF_0_1"
          
          
          geometry={nodes.PartF_PartF_0_1.geometry}
          material={materials.PartF}
          morphTargetDictionary={nodes.PartF_PartF_0_1.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_1.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_2"
          
          
          geometry={nodes.PartF_PartF_0_2.geometry}
          material={materials.PartB}
          morphTargetDictionary={nodes.PartF_PartF_0_2.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_2.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_3"
          
          
          geometry={nodes.PartF_PartF_0_3.geometry}
          material={materials.PartA}
          morphTargetDictionary={nodes.PartF_PartF_0_3.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_3.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_4"
          
          
          geometry={nodes.PartF_PartF_0_4.geometry}
          material={materials.PartC}
          morphTargetDictionary={nodes.PartF_PartF_0_4.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_4.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_5"
          
          
          geometry={nodes.PartF_PartF_0_5.geometry}
          material={materials.PartE}
          morphTargetDictionary={nodes.PartF_PartF_0_5.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_5.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_6"
          
          
          geometry={nodes.PartF_PartF_0_6.geometry}
          material={materials.PartG}
          morphTargetDictionary={nodes.PartF_PartF_0_6.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_6.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_7"
          
          
          geometry={nodes.PartF_PartF_0_7.geometry}
          material={materials["PartD.001"]}
          morphTargetDictionary={nodes.PartF_PartF_0_7.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_7.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_8"
          
          
          geometry={nodes.PartF_PartF_0_8.geometry}
          material={materials["warrior_lowpoly:Material #39.001"]}
          morphTargetDictionary={nodes.PartF_PartF_0_8.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_8.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_9"
          
          
          geometry={nodes.PartF_PartF_0_9.geometry}
          material={materials["lambert1.001"]}
          morphTargetDictionary={nodes.PartF_PartF_0_9.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_9.morphTargetInfluences}
        />
        <mesh
          name="PartF_PartF_0_10"
          
          
          geometry={nodes.PartF_PartF_0_10.geometry}
          material={materials["Grass.001"]}
          morphTargetDictionary={nodes.PartF_PartF_0_10.morphTargetDictionary}
          morphTargetInfluences={nodes.PartF_PartF_0_10.morphTargetInfluences}
        />
      </group>
    </a.group>
  );
}

export default Island
