const App = require("./App")
// @ponicode
describe("dClick", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.dClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.dClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.dClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.dClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.dClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.dClick(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
