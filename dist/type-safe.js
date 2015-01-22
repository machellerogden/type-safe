/*!
 * type-safe v0.1.0 <https://github.com/machellerogden>
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
            return isValid;
        };
    };

    isExisty = function (subject) { return (subject != null); };
    isTruthy = function (subject) { return (subject !== false && isExisty(subject)); };

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
