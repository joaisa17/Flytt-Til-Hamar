import { useThree, useFrame } from '@react-three/fiber';

const distanceMultiplier = 4;
const speedMultiplier = 0.01;

const Camera = () => {
    const cam = useThree(state => state.camera);

    cam.position.y = 5;

    var c = 0;

    useFrame(() => {
        cam.position.x = Math.sin(c * speedMultiplier) * distanceMultiplier;
        cam.position.z = Math.cos(c * speedMultiplier) * distanceMultiplier;

        cam.lookAt(0, 4, 0);

        c++;
    })

    return null
}

export default Camera;