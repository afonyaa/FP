export const onceAndAfter = <OnceFn extends (...onceFnArgs: any[]) => any>(
    onceFn: OnceFn,
    afterFn: OnceFn
) => {
    let called = false
    return (...args: Parameters<OnceFn>) => {
        if (!called) {
            called = true
            onceFn(...args)
        } else afterFn(...args)
    }
}
