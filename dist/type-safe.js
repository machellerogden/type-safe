/*!
 * type-safe v0.1.1 <https://github.com/machellerogden>
 * @license MIT
 * @copyright 2015 Mac Heller-Ogden <http://www.machellerogden.com/>
 * @author Mac Heller-Ogden
 * @summary Type predicates and assertions.
 */
!function (name, definition) {
    if (typeof module != 'undefined' && module.exports) module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else (function () { return this || (0, eval)('this'); }())[name] = definition();
}('typeSafe', function () {
    var isExisty,
        isTruthy,
        isNan,
        isNull,
        isUndefined,
        isString,
        isFunction,
        isObject,
        isArray,
        isNumber,
        isBoolean;

    function TypeError(message) {
        this.name = 'TypeError';
        this.message = message;
    }
    TypeError.prototype = Error.prototype;


    function generateAssertor(predicate, formatter) {
        return function (subject) {
            if (!predicate(subject)) throw new TypeError(formatter(subject));
        };
    }

    function generateErrorFormatter(type) {
        return function (subject) {
            return 'Expected `' + type + '` and instead received `' + typeof subject + '`';
        };
    }

    function generateTypeValidation(type) {
        return function (subject) {
            var subjectType = typeof subject,
                isNull = false,
                isArray = false,
                isValid = true;
            if (subjectType === 'object' && !(isNull = subject === null)) {
                isArray = Object.prototype.toString.call(subject) === '[object Array]';
            }
            if (type === 'existy') {
                isValid = (subject != null);
            } else if (type === 'truthy') {
                isValid = (subject !== false && subject != null);
            } else if (type === 'nan') {
                isValid = (subjectType === 'number' && isNaN(subject));
            } else if (type === 'number') {
                isValid = (!isNaN(subject) && subjectType === type);
            } else if (type === 'null') {
                isValid = isNull;
            } else if (type === 'array') {
                isValid = isArray;
            } else if (type === 'object' && (isArray || isNull)) {
                isValid = false;
            } else if (subjectType !== type) {
                isValid = false;
            }
            return isValid;
        };
    };

    isExisty = generateTypeValidation('existy');
    isTruthy = generateTypeValidation('truthy');
    isNan = generateTypeValidation('nan');
    isNull = generateTypeValidation('null');
    isUndefined = generateTypeValidation('undefined');
    isString = generateTypeValidation('string');
    isFunction = generateTypeValidation('function');
    isObject = generateTypeValidation('object');
    isArray = generateTypeValidation('array');
    isNumber = generateTypeValidation('number');
    isBoolean = generateTypeValidation('boolean');

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
        assertExisty: generateAssertor(isExisty, generateErrorFormatter('existy')),
        assertTruthy: generateAssertor(isTruthy, generateErrorFormatter('truthy')),
        assertNan: generateAssertor(isNan, generateErrorFormatter('NaN')),
        assertNull: generateAssertor(isNull, generateErrorFormatter('null')),
        assertUndefined: generateAssertor(isUndefined, generateErrorFormatter('undefined')),
        assertString: generateAssertor(isString, generateErrorFormatter('string')),
        assertFunction: generateAssertor(isFunction, generateErrorFormatter('function')),
        assertObject: generateAssertor(isObject, generateErrorFormatter('object')),
        assertArray: generateAssertor(isArray, generateErrorFormatter('array')),
        assertNumber: generateAssertor(isNumber, generateErrorFormatter('number')),
        assertBoolean: generateAssertor(isBoolean, generateErrorFormatter('boolean')),
        decorate: function (target) {
            target = (typeof target === 'object') ? target : (0, eval)('this');
            for (var i in this) if (this.hasOwnProperty(i) && (i !== 'decorate') && (target[i] == null)) target[i] = this[i];
        }
    };

});
