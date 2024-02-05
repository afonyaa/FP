import { once } from './'

describe('once', () => {
    it("runs one time", () => {
        const myFunc = jest.fn();
        const myFnOnce = once(myFunc);
        myFnOnce();
        myFnOnce();
        myFnOnce();
        expect(myFunc).toHaveBeenCalledTimes(1)
    })
})
