import React from "react";
import { useMemo } from "react";

interface ContextProps {
    children: React.ReactNode;
}

interface CounterActions {
    increase: Function;
    decrease: Function;
}
type State<T> = [T, CounterActions];


export const counterContext = React.createContext<State<number>>([0, undefined as unknown as CounterActions]);

export function CounterContext({ children }: ContextProps) {

    const [counter, setCounter] = React.useState(999);
    const actions = useMemo(() => ({
        increase: () => setCounter(prev => prev + 1),
        decrease: () => setCounter(prev => prev - 1),
    }), []);

    const value: State<number> = useMemo(() => [counter, actions], [counter, actions]);

    return <>
        <counterContext.Provider value={value}>
            {children}
        </counterContext.Provider>
    </>
}