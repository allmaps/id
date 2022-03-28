/**
 * Generates a ID from a string using the SHA-512 algorithm. Given the same input, the ID will always be the same.
 *
 * @param {string} str - Input string
 * @param {number} [length=16] - Length of returned hash
 * @returns First `length` characters of the SHA-512 hash of `str`
 */
export declare function generateId(str: string, length?: number): Promise<string>;
/**
 * Generates a random ID.
 *
 * @async
 * @param {number} [length=16] - Length of returned hash
 * @returns {string} First `length` characters of the SHA-512 hash of a random UUID.
 */
export declare function generateRandomId(length?: number): Promise<string>;
/**
 * Generates a checksum of a JSON object.
 *
 * @async
 * @param {Object} obj - JSON object
 * @param {number} [length=16] - Length of returned hash
 * @returns {string} First `length` characters of the SHA-512 hash of sorted and serialized version of `obj`.
 */
export declare function generateChecksum(obj: {}, length?: number): Promise<string>;
