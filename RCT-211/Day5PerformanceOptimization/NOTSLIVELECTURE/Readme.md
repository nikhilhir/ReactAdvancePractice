// Understanding what is memoization
// How the components were re-rendering with some state change in the parent component.
// - Console.logs, - Profiler Tool
// - Expensive operation - synchronous -> stopping the execution thread in JS, whole was feeling a bit slow/laggy.
// Props (not changing) -> don't re-render;
// - React.memo -> HOC -> prevProps === currentProps -> true (don't render) else if false -> (re-render)
// It fails, when we pass objects, reference data types as objects
// === -> will always return false
// second argument of React.memo -> function (prevProps, currentProps) -> custom Equality check
// useCallback () -> store the reference of the function objects
// useMemo () -> store the value
// array of dependency change (useCallback, useMemo, -> useEffect)