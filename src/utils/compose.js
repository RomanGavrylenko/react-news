const compose = (...funcs) => (Component) => {
    return funcs.reduceRight((prev, current) => current(prev), Component)
}

export default compose;