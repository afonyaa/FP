export const onceIfSuccess = <FNType extends (...args: any[]) => any>(
    fn: FNType
) => {
    let alreadyCalledSuccessfully = false
    return ((...args: Parameters<FNType>) => {
        if (!alreadyCalledSuccessfully) {
            fn(...args)
            alreadyCalledSuccessfully = true
        }
    }) as FNType
}

const onceHi = onceIfSuccess((shouldThrowError?: boolean) => {
    if (shouldThrowError) {
        throw new Error()
    } else console.log('Called')
})

try {
    onceHi(true)
} catch (e) {
    console.log('Error happened')
}
