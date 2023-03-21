import React from "react";
import { counterContext } from "../context/CountContext";

export default function useConuterState() {
    const cntCtx = React.useContext(counterContext);
    if (undefined === cntCtx) {
        throw new Error('cntCtx is undefine!!!');
    }
    return cntCtx;
}