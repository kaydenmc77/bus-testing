const { describe, beforeEach } = require('node:test')
const { validateForm } = require('../src/script')

let pricePerSeat = 10

describe('Bus Ticketing Test Manager', () => {
    beforeEach(() => {
        username = 'Kayden'
        destination = 'Nelson'
    })

    test('Calculating fare price for 5 seats', () => {
        let result = validateForm('Kayden', 'Nelson', 5, pricePerSeat)
        expect(result).toBe(50)
    })

    test('Testing to see if it accounts for no seats being chosen', () => {
        let result = validateForm('Kayden', 'Nelson', 0, pricePerSeat)
        expect(result).toBe('Error')
    })

    test('Testing to see if it accounts for no username or destination', () => {
        let result = validateForm('', '', 5, pricePerSeat)
        expect(result).toBe('Error')
    })
})