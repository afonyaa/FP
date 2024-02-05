const makeSaluteClass = (term) =>
    class {
        constructor(x) {
            this.x = x
        }
        salute(y) {
            console.log(`${this.x} says "${term}" to ${y}`)
        }
    }

const SpanishSalute = makeSaluteClass('Hola!')

const spanishSalute = new SpanishSalute('Evgeny')
spanishSalute.salute('Lora')

const fullSalute = (c, person1, person2) => {
    new c(person1).salute(person2)
}

fullSalute(makeSaluteClass('Hola'), 'Evgeny', 'Lora')
