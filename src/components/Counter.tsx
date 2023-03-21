import React from "react";
import useConuterState from "../hook/useConuterState";

export default function Counter() {

    const [count, actions] = useConuterState();

    const plus: React.MouseEventHandler<HTMLButtonElement> = e => actions.increase();
    const minus: React.MouseEventHandler<HTMLButtonElement> = e => actions.decrease();

    /* JSX ELEMENT
    ---------------------------------------------------------------------- */
    return <>
        <button onClick={plus}>+</button>
        <span>{count}</span>
        <button onClick={minus}>-</button>
    </>
}