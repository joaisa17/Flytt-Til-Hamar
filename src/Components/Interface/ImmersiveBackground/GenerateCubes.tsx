import { FC, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Cube from './Cube';

const color = "rgba(10, 120, 180, 0.5)";

const count = 24;
const range = 8;
const sizeY = 8;

const Cubes: FC<JSX.IntrinsicElements['group']> = props => {
    const cubes = [];

    const group = useRef<JSX.IntrinsicElements['group']>();

    useFrame(() => {
        group.current?.rotateY?.(0.011);
    })

    for (var i = 0; i < count; i++) {
        const x = Math.sin(i / count * Math.PI * 2) * range;
        const y = -sizeY / 2.5;
        const z = Math.cos(i / count * Math.PI * 2) * range;

        cubes.push(<Cube
            key={i}
            position={[x, y, z]}
            rotation={[0, (i / count) * Math.PI * 2, 0]}
            color={color}
            size={[1, sizeY, 1]}
        />)
    }

    return <group ref={group} {...props}>
        {cubes}
    </group>
}

export default Cubes;