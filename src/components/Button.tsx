//pode ser type também mais iremos utilizar interface

interface ButtonProps {
    color: string;
}

export function Button(props: ButtonProps) {
    return (
        <button type="button"  >
            {props.color}
        </button>
    )
}