interface Props {
    size: [number, number, number];
    color: JSX.IntrinsicElements['meshStandardMaterial']['color'];
}

const Box = ({size, color, ...props}: JSX.IntrinsicElements['mesh'] & Props) => {

    return <mesh
        {...props}
    >
        <boxGeometry args={size} />
        <meshStandardMaterial color={color || 'gray'} />
    </mesh>
}

export default Box;