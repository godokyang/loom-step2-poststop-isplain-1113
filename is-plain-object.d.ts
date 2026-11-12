/**
 * Returns true if an object was created by the `Object` constructor, or Object.create(null).
 * 
 * @param value The value to test
 */
export function isPlainObject(value: unknown): value is Record<PropertyKey, unknown>;

/**
 * Returns true if an object was created by the `Object` constructor, or Object.create(null),
 * and has at least one own enumerable string key.
 *
 * @param value The value to test
 */
export function isNonEmptyPlainObject(value: unknown): value is Record<PropertyKey, unknown>;
