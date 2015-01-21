/*!
 * type-safe v0.0.3 <https://github.com/machellerogden>
 * @license MIT
 * @copyright 2015 Mac Heller-Ogden <http://www.machellerogden.com/>
 * @author Mac Heller-Ogden
 * @summary yet another predicate and assertion utility for type safety
 */
!function (name, definition) {
    if (typeof module != 'undefined' && module.exports) module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else (function () { return this || (0, eval)('this'); }())[name] = definition();
}('typeSafe', function () {
    var isNan,
        isNull,
        isUndefined,
        isString,
        isFunction,
        isObject,
        isArray,
        isNumber,
        isBoolean,
        assertExisty,
        assertTruthy,
        assertNan,
        assertNull,
        assertUndefined,
        assertString,
        assertFunction,
        assertObject,
        assertArray,
        assertNumber,
        assertBoolean;

    function TypeError(message) {
        this.name = 'TypeError';
        this.message = message;
    }
    TypeError.prototype = Error.prototype;

    function throwTypeError (expectedType, receivedType) {
        throw new TypeError('Expected `' + expectedType + '` and instead received `' + receivedType + '`');
    }

    function isExisty(subject, throwError) {
        var isValid = (subject != null) ? true : false;
        if (!isValid && throwError) throwTypeError('existy', typeof subject);
        return isValid;
    }

    function isTruthy(subject, throwError) {
        var isValid = ((subject !== false) && isExisty(subject)) ? true : false;
        if (!isValid && throwError) throwTypeError('truthy', typeof subject);
        return isValid;
    }

    function generateTypeValidation(type) {
        return function (subject, throwError) {
            var subjectType = typeof subject,
                isNull = false,
                isArray = false,
                isValid = true;
            if (subjectType === 'object') {
                if (!(isNull = subject === null)) isArray = Object.prototype.toString.call(subject) === '[object Array]';
            }
            if (type === 'nan') {
                if (!(subjectType === 'number' && isNaN(subject))) isValid = false;
            } else if (type === 'number') {
                if (isNaN(subject) || subjectType !== type) isValid = false;
            } else if (type === 'null') {
                if (!isNull) isValid = false;
            } else if (type === 'array') {
                if (!isArray) isValid = false;
            } else if (type === 'object' && (isArray || isNull)) {
                isValid = false;
            } else if (subjectType !== type) {
                isValid = false;
            }
            if (!isValid && throwError) throwTypeError(type, subjectType);
            return isValid;
        };
    };

    function generateAssertor(validation) {
        return function (subject) {
            return validation(subject, true);
        };
    }

    isNan = generateTypeValidation('nan');
    isNull = generateTypeValidation('null');
    isUndefined = generateTypeValidation('undefined');
    isString = generateTypeValidation('string');
    isFunction = generateTypeValidation('function');
    isObject = generateTypeValidation('object');
    isArray = generateTypeValidation('array');
    isNumber = generateTypeValidation('number');
    isBoolean = generateTypeValidation('boolean');

    assertExisty = generateAssertor(isExisty);
    assertTruthy = generateAssertor(isTruthy);
    assertNan = generateAssertor(isNan);
    assertNull = generateAssertor(isNull);
    assertUndefined = generateAssertor(isUndefined);
    assertString = generateAssertor(isString);
    assertFunction = generateAssertor(isFunction);
    assertObject = generateAssertor(isObject);
    assertArray = generateAssertor(isArray);
    assertNumber = generateAssertor(isNumber);
    assertBoolean = generateAssertor(isBoolean);

    return {
        isExisty: isExisty,
        isTruthy: isTruthy,
        isNan: isNan,
        isNull: isNull,
        isUndefined: isUndefined,
        isString: isString,
        isFunction: isFunction,
        isObject: isObject,
        isArray: isArray,
        isNumber: isNumber,
        isBoolean: isBoolean,
        assertExisty: assertExisty,
        assertTruthy: assertTruthy,
        assertNan: assertNan,
        assertNull: assertNull,
        assertUndefined: assertUndefined,
        assertString: assertString,
        assertFunction: assertFunction,
        assertObject: assertObject,
        assertArray: assertArray,
        assertNumber: assertNumber,
        assertBoolean: assertBoolean,
        export: function (target) {
            target = (typeof target === 'object') ? target : window;
            for (var i in this) if (this.hasOwnProperty(i) && (i !== 'export') && (target[i] == null)) target[i] = this[i];
        }
    };

});
