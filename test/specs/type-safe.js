/* global typeSafe */
/* eslint no-undefined: 0, func-style: 0 */
describe('type-safe', function () {
    var testString = 'foo',
        testNumber = 23,
        testObject = {},
        testArray = [],
        testFunction = function () {};

    describe('#isString', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `string`', function () {
                expect(typeSafe.isString(testString)).toEqual(true);
            });
            it('should return false if argument is not of type `string`', function () {
                expect(typeSafe.isString(testNumber)).toEqual(false);
                expect(typeSafe.isString(testFunction)).toEqual(false);
                expect(typeSafe.isString(testObject)).toEqual(false);
                expect(typeSafe.isString(testArray)).toEqual(false);
                expect(typeSafe.isString(NaN)).toEqual(false);
                expect(typeSafe.isString(null)).toEqual(false);
                expect(typeSafe.isString(undefined)).toEqual(false);
                expect(typeSafe.isString(true)).toEqual(false);
                expect(typeSafe.isString(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `string`', function () {
                expect(function () {
                    typeSafe.isString(testString, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `string`', function () {
                expect(function () {
                    typeSafe.isString(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isString(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertString', function () {
        it('should not throw if argument is of type `string`', function () {
            expect(function () {
                typeSafe.assertString(testString);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `string`', function () {
            expect(function () {
                typeSafe.assertString(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertString(false);
            }).toThrow();
        });
    });

    describe('#isBoolean', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `boolean`', function () {
                expect(typeSafe.isBoolean(true)).toEqual(true);
                expect(typeSafe.isBoolean(false)).toEqual(true);
            });
            it('should return false if argument is not of type `boolean`', function () {
                expect(typeSafe.isBoolean(testString)).toEqual(false);
                expect(typeSafe.isBoolean(testNumber)).toEqual(false);
                expect(typeSafe.isBoolean(testFunction)).toEqual(false);
                expect(typeSafe.isBoolean(testObject)).toEqual(false);
                expect(typeSafe.isBoolean(testArray)).toEqual(false);
                expect(typeSafe.isBoolean(NaN)).toEqual(false);
                expect(typeSafe.isBoolean(null)).toEqual(false);
                expect(typeSafe.isBoolean(undefined)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `boolean`', function () {
                expect(function () {
                    typeSafe.isBoolean(true, true);
                    typeSafe.isBoolean(false, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `boolean`', function () {
                expect(function () {
                    typeSafe.isBoolean(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isBoolean(undefined, true);
                }).toThrow();
            });
        });
    });

    describe('#assertBoolean', function () {
        it('should not throw if argument is of type `boolean`', function () {
            expect(function () {
                typeSafe.assertBoolean(true);
                typeSafe.assertBoolean(false);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `boolean`', function () {
            expect(function () {
                typeSafe.assertBoolean(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertBoolean(undefined);
            }).toThrow();
        });
    });

    describe('#isNumber', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `number`', function () {
                expect(typeSafe.isNumber(testNumber)).toEqual(true);
            });
            it('should return false if argument is not of type `number`', function () {
                expect(typeSafe.isNumber(testString)).toEqual(false);
                expect(typeSafe.isNumber(testFunction)).toEqual(false);
                expect(typeSafe.isNumber(testObject)).toEqual(false);
                expect(typeSafe.isNumber(testArray)).toEqual(false);
                expect(typeSafe.isNumber(NaN)).toEqual(false);
                expect(typeSafe.isNumber(null)).toEqual(false);
                expect(typeSafe.isNumber(undefined)).toEqual(false);
                expect(typeSafe.isNumber(true)).toEqual(false);
                expect(typeSafe.isNumber(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `number`', function () {
                expect(function () {
                    typeSafe.isNumber(testNumber, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `number`', function () {
                expect(function () {
                    typeSafe.isNumber(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNumber(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertNumber', function () {
        it('should not throw if argument is of type `number`', function () {
            expect(function () {
                typeSafe.assertNumber(testNumber);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `number`', function () {
            expect(function () {
                typeSafe.assertNumber(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertNumber(false);
            }).toThrow();
        });
    });

    describe('#isNaN', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `NaN`', function () {
                expect(typeSafe.isNan(NaN)).toEqual(true);
            });
            it('should return false if argument is not of type `NaN`', function () {
                expect(typeSafe.isNan(testString)).toEqual(false);
                expect(typeSafe.isNan(testNumber)).toEqual(false);
                expect(typeSafe.isNan(testFunction)).toEqual(false);
                expect(typeSafe.isNan(testObject)).toEqual(false);
                expect(typeSafe.isNan(testArray)).toEqual(false);
                expect(typeSafe.isNan(null)).toEqual(false);
                expect(typeSafe.isNan(undefined)).toEqual(false);
                expect(typeSafe.isNan(true)).toEqual(false);
                expect(typeSafe.isNan(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `NaN`', function () {
                expect(function () {
                    typeSafe.isNan(NaN, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `NaN`', function () {
                expect(function () {
                    typeSafe.isNan(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNan(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertNaN', function () {

        it('should not throw if argument is of type `NaN`', function () {
            expect(function () {
                typeSafe.assertNan(NaN);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `NaN`', function () {
            expect(function () {
                typeSafe.assertNan(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertNan(false);
            }).toThrow();
        });
    });

    describe('#isFunction', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `function`', function () {
                expect(typeSafe.isFunction(testFunction)).toEqual(true);
            });
            it('should return false if argument is not of type `function`', function () {
                expect(typeSafe.isFunction(testString)).toEqual(false);
                expect(typeSafe.isFunction(testNumber)).toEqual(false);
                expect(typeSafe.isFunction(testObject)).toEqual(false);
                expect(typeSafe.isFunction(testArray)).toEqual(false);
                expect(typeSafe.isFunction(NaN)).toEqual(false);
                expect(typeSafe.isFunction(null)).toEqual(false);
                expect(typeSafe.isFunction(undefined)).toEqual(false);
                expect(typeSafe.isFunction(true)).toEqual(false);
                expect(typeSafe.isFunction(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `function`', function () {
                expect(function () {
                    typeSafe.isFunction(testFunction, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `function`', function () {
                expect(function () {
                    typeSafe.isFunction(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isFunction(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertFunction', function () {

        it('should not throw if argument is of type `function`', function () {
            expect(function () {
                typeSafe.assertFunction(testFunction);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `function`', function () {
            expect(function () {
                typeSafe.assertFunction(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertFunction(false);
            }).toThrow();
        });
    });

    describe('#isObject', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `object`', function () {
                expect(typeSafe.isObject(testObject)).toEqual(true);
            });
            it('should return false if argument is not of type `object`', function () {
                expect(typeSafe.isObject(testString)).toEqual(false);
                expect(typeSafe.isObject(testNumber)).toEqual(false);
                expect(typeSafe.isObject(testFunction)).toEqual(false);
                expect(typeSafe.isObject(testArray)).toEqual(false);
                expect(typeSafe.isObject(NaN)).toEqual(false);
                expect(typeSafe.isObject(null)).toEqual(false);
                expect(typeSafe.isObject(undefined)).toEqual(false);
                expect(typeSafe.isObject(true)).toEqual(false);
                expect(typeSafe.isObject(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `object`', function () {
                expect(function () {
                    typeSafe.isObject(testObject, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `object`', function () {
                expect(function () {
                    typeSafe.isObject(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isObject(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertObject', function () {

        it('should not throw if argument is of type `object`', function () {
            expect(function () {
                typeSafe.assertObject(testObject);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `object`', function () {
            expect(function () {
                typeSafe.assertObject(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertObject(false);
            }).toThrow();
        });
    });

    describe('#isArray', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `array`', function () {
                expect(typeSafe.isArray(testArray)).toEqual(true);
            });
            it('should return false if argument is not of type `array`', function () {
                expect(typeSafe.isArray(testString)).toEqual(false);
                expect(typeSafe.isArray(testNumber)).toEqual(false);
                expect(typeSafe.isArray(testFunction)).toEqual(false);
                expect(typeSafe.isArray(testObject)).toEqual(false);
                expect(typeSafe.isArray(NaN)).toEqual(false);
                expect(typeSafe.isArray(null)).toEqual(false);
                expect(typeSafe.isArray(undefined)).toEqual(false);
                expect(typeSafe.isArray(true)).toEqual(false);
                expect(typeSafe.isArray(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `array`', function () {
                expect(function () {
                    typeSafe.isArray(testArray, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `object`', function () {
                expect(function () {
                    typeSafe.isArray(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isArray(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertArray', function () {

        it('should not throw if argument is of type `array`', function () {
            expect(function () {
                typeSafe.assertArray(testArray);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `object`', function () {
            expect(function () {
                typeSafe.assertArray(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertArray(false);
            }).toThrow();
        });
    });

    describe('#isNull', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `null`', function () {
                expect(typeSafe.isNull(null)).toEqual(true);
            });
            it('should return false if argument is not of type `null`', function () {
                expect(typeSafe.isNull(testString)).toEqual(false);
                expect(typeSafe.isNull(testNumber)).toEqual(false);
                expect(typeSafe.isNull(testFunction)).toEqual(false);
                expect(typeSafe.isNull(testArray)).toEqual(false);
                expect(typeSafe.isNull(testObject)).toEqual(false);
                expect(typeSafe.isNull(NaN)).toEqual(false);
                expect(typeSafe.isNull(undefined)).toEqual(false);
                expect(typeSafe.isNull(true)).toEqual(false);
                expect(typeSafe.isNull(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is of type `null`', function () {
                expect(function () {
                    typeSafe.isNull(null, true);
                }).not.toThrow();
            });
            it('should throw if first argument is not of type `null`', function () {
                expect(function () {
                    typeSafe.isNull(testString, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(testNumber, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(testFunction, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(testObject, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(testArray, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(NaN, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(true, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isNull(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertNull', function () {
        it('should not throw if argument is of type `null`', function () {
            expect(function () {
                typeSafe.assertNull(null);
            }).not.toThrow();
        });
        it('should throw if argument is not of type `null`', function () {
            expect(function () {
                typeSafe.assertNull(testString);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(testNumber);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(testFunction);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(testObject);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(testArray);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(NaN);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(true);
            }).toThrow();
            expect(function () {
                typeSafe.assertNull(false);
            }).toThrow();
        });
    });

    describe('#isExisty', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is not of type `null` or of type `undefined`', function () {
                expect(typeSafe.isExisty(testString)).toEqual(true);
                expect(typeSafe.isExisty(testNumber)).toEqual(true);
                expect(typeSafe.isExisty(testArray)).toEqual(true);
                expect(typeSafe.isExisty(testObject)).toEqual(true);
                expect(typeSafe.isExisty(testFunction)).toEqual(true);
                expect(typeSafe.isExisty(NaN)).toEqual(true);
                expect(typeSafe.isExisty(true)).toEqual(true);
                expect(typeSafe.isExisty(false)).toEqual(true);
            });
            it('should return false if argument is of type `null` or of type `undefined`', function () {
                expect(typeSafe.isExisty(null)).toEqual(false);
                expect(typeSafe.isExisty(undefined)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is not of type `null` or of type `undefined`', function () {
                expect(function () {
                    typeSafe.isExisty(testString, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(testNumber, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(testArray, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(testObject, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(testFunction, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(NaN, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(true, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isExisty(false, true);
                }).not.toThrow();
            });
            it('should throw if first argument is of type `null` or of type `undefined`', function () {
                expect(function () {
                    typeSafe.isExisty(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isExisty(undefined, true);
                }).toThrow();
            });
        });
    });

    describe('#assertExisty', function () {
        it('should not throw if argument is not of type `null` or of type `undefined`', function () {
            expect(function () {
                typeSafe.assertExisty(testString);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(testNumber);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(testArray);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(testObject);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(testFunction);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(NaN);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(true);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertExisty(false);
            }).not.toThrow();
        });
        it('should throw if argument is of type `null` or of type `undefined`', function () {
            expect(function () {
                typeSafe.assertExisty(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertExisty(undefined);
            }).toThrow();
        });
    });

    describe('#isTruthy', function () {

        describe('when called with a single argument', function () {
            it('should return true if argument is of type `existy` and not equal to `false`', function () {
                expect(typeSafe.isTruthy(testString)).toEqual(true);
                expect(typeSafe.isTruthy(testNumber)).toEqual(true);
                expect(typeSafe.isTruthy(testArray)).toEqual(true);
                expect(typeSafe.isTruthy(testObject)).toEqual(true);
                expect(typeSafe.isTruthy(testFunction)).toEqual(true);
                expect(typeSafe.isTruthy(NaN)).toEqual(true);
                expect(typeSafe.isTruthy(true)).toEqual(true);
            });
            it('should return false if argument is of type `null` or of type `undefined`', function () {
                expect(typeSafe.isTruthy(null)).toEqual(false);
                expect(typeSafe.isTruthy(undefined)).toEqual(false);
                expect(typeSafe.isTruthy(false)).toEqual(false);
            });
        });

        describe('when called with true as a the second argument', function () {
            it('should not throw if first argument is not of type `null` or of type `undefined`', function () {
                expect(function () {
                    typeSafe.isTruthy(testString, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(testNumber, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(testArray, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(testObject, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(testFunction, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(NaN, true);
                }).not.toThrow();
                expect(function () {
                    typeSafe.isTruthy(true, true);
                }).not.toThrow();
            });
            it('should throw if first argument is of type `null` or of type `undefined`', function () {
                expect(function () {
                    typeSafe.isTruthy(null, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isTruthy(undefined, true);
                }).toThrow();
                expect(function () {
                    typeSafe.isTruthy(false, true);
                }).toThrow();
            });
        });
    });

    describe('#assertTruthy', function () {
        it('should not throw if argument is not of type `null` or of type `undefined`', function () {
            expect(function () {
                typeSafe.assertTruthy(testString);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(testNumber);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(testArray);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(testObject);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(testFunction);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(NaN);
            }).not.toThrow();
            expect(function () {
                typeSafe.assertTruthy(true);
            }).not.toThrow();
        });
        it('should throw if argument is of type `null` or of type `undefined`', function () {
            expect(function () {
                typeSafe.assertTruthy(null);
            }).toThrow();
            expect(function () {
                typeSafe.assertTruthy(undefined);
            }).toThrow();
            expect(function () {
                typeSafe.assertTruthy(false);
            }).toThrow();
        });
    });

    describe('#export', function () {
        it('should add all methods (except export itself) to given target object', function () {
            var target = {};
            typeSafe.export(target);
            expect(target.isExisty).toEqual(typeSafe.isExisty);
            expect(target.isTruthy).toEqual(typeSafe.isTruthy);
            expect(target.isNan).toEqual(typeSafe.isNan);
            expect(target.isNull).toEqual(typeSafe.isNull);
            expect(target.isUndefined).toEqual(typeSafe.isUndefined);
            expect(target.isString).toEqual(typeSafe.isString);
            expect(target.isFunction).toEqual(typeSafe.isFunction);
            expect(target.isObject).toEqual(typeSafe.isObject);
            expect(target.isArray).toEqual(typeSafe.isArray);
            expect(target.isNumber).toEqual(typeSafe.isNumber);
            expect(target.isBoolean).toEqual(typeSafe.isBoolean);
            expect(target.assertExisty).toEqual(typeSafe.assertExisty);
            expect(target.assertTruthy).toEqual(typeSafe.assertTruthy);
            expect(target.assertNan).toEqual(typeSafe.assertNan);
            expect(target.assertNull).toEqual(typeSafe.assertNull);
            expect(target.assertUndefined).toEqual(typeSafe.assertUndefined);
            expect(target.assertString).toEqual(typeSafe.assertString);
            expect(target.assertFunction).toEqual(typeSafe.assertFunction);
            expect(target.assertObject).toEqual(typeSafe.assertObject);
            expect(target.assertArray).toEqual(typeSafe.assertArray);
            expect(target.assertNumber).toEqual(typeSafe.assertNumber);
            expect(target.assertBoolean).toEqual(typeSafe.assertBoolean);
            expect(target.export).not.toEqual(typeSafe.export);
        });
    });

});

