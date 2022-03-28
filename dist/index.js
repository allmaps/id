import * as crypto from 'crypto';
import serialize from './checksum.js';
function generateHash(str) {
    return crypto.createHash('sha512').update(str, 'utf-8').digest('hex');
}
/**
 * Generates a ID from a string using the SHA-512 algorithm. Given the same input, the ID will always be the same.
 *
 * @param {string} str - Input string
 * @param {number} [length=16] - Length of returned hash
 * @returns First `length` characters of the SHA-512 hash of `str`
 */
export async function generateId(str, length = 16) {
    const hash = await generateHash(String(str));
    return hash.slice(0, length);
}
/**
 * Generates a random ID.
 *
 * @async
 * @param {number} [length=16] - Length of returned hash
 * @returns {string} First `length` characters of the SHA-512 hash of a random UUID.
 */
export async function generateRandomId(length) {
    const uuid = crypto.randomUUID();
    const id = await generateId(uuid, length);
    return id;
}
/**
 * Generates a checksum of a JSON object.
 *
 * @async
 * @param {Object} obj - JSON object
 * @param {number} [length=16] - Length of returned hash
 * @returns {string} First `length` characters of the SHA-512 hash of sorted and serialized version of `obj`.
 */
export async function generateChecksum(obj, length) {
    const checksum = await generateId(serialize(obj), length);
    return checksum;
}
