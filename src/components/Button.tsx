//pode ser type também mais iremos utilizar interface

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    return (
        <button type="button" style={{ backgroundColor: props.color }} >
            {props.children}
        </button>
    )
}