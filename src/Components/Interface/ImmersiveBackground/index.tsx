import { Canvas } from '@react-three/fiber';

import Camera from './Camera';
import Cubes from './GenerateCubes';

const ImmersiveBackground = () => {

    return <Canvas camera={{ fov: 55, rotation: [-0.5, -0, -0] }} className="immersive-background">
        <Camera />
        <ambientLight intensity={0.2} />
        <pointLight position={[-3, 4, 4]} intensity={2} />

        <Cubes />
    </Canvas>
}

export default ImmersiveBackground;