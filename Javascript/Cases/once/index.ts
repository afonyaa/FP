export const once = <FNType extends (...args: any[]) => any>(fn: FNType) => {
    let doFn = ((...args: Parameters<FNType>) => {
        fn(...args)
        doFn = (() => {}) as FNType
    }) as FNType

    return (...args: any) => {
        doFn(...args)
    }
}
