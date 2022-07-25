const {addKey, remove, lookup} = require('../index.js')

describe('Тестирование функций add, remove, lookup', () => {
    let obj = {
        buvi008: "buvi008",
        vad1m: "Vad1m",
        Amin: "Amin",
        book1: "Гарри потер"
    }

    const obj1 = {
        key1: 'Ключ1',
        key2: 'Ключ2',
        key3: 'Последний ключ',
    }

    const obj2 = {
        key1: 'Значение1',
        key2: 'Значение2',
        key3: 'Последнее значение',
    }

    const obj3 = {
        key1: 'Чики',
        key2: 'Брики',
        key3: 'В дамки',
    }

    describe('Тестирование функции add', () => {
        beforeEach(() => {
            addKey('soap', obj)
            addKey('rope', obj)
            addKey('stool', obj)
        })

        it('Проверяем наличие добавленных ключей', () => {
            expect(obj.soap).toBe('soap')
            expect(obj.rope).toBe('rope')
            expect(obj.stool).toBe('stool')
        })
    })

    describe('Тестирование функции remove', () => {
        beforeEach(() => {
            remove('soap', obj)
            remove('rope', obj)
            remove('stool', obj)
        })

        it('Проверяем отсутствие удаленных ключей', () => {
            expect(obj.soap).toBeUndefined()
            expect(obj.rope).toBeUndefined()
            expect(obj.stool).toBeUndefined()
        })
    })

    describe('Тестирование функции lookup', () => {
        it('Проверяем значение которое вернула функция lookup', () => {
            expect(lookup(obj1)).toEqual(obj1[Object.keys(obj1).pop()])
            expect(lookup(obj2)).toEqual(obj2[Object.keys(obj2).pop()])
            expect(lookup(obj3)).toEqual(obj3[Object.keys(obj3).pop()])
        })

    })

    describe('Тестирование функций add и lookup', () => {
        beforeEach(() => {
            const obj1 = {
                key1: 'Ключ1',
                key2: 'Ключ2',
                key3: 'Последний ключ',
            }

            const obj2 = {
                key1: 'Значение1',
                key2: 'Значение2',
                key3: 'Последнее значение',
            }

            const obj3 = {
                key1: 'Чики',
                key2: 'Брики',
                key3: 'В дамки',
            }

            addKey('apple', obj1)
            addKey('pineapple', obj2)
            addKey('onion', obj3)
        })
        it('Проверяем значение которое вернула функция lookup', () => {
            expect(lookup(obj1)).toEqual(obj1[Object.keys(obj1).pop()])
            expect(lookup(obj2)).toEqual(obj2[Object.keys(obj2).pop()])
            expect(lookup(obj3)).toEqual(obj3[Object.keys(obj3).pop()])
        })

    })
})