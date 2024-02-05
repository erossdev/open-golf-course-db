// LIFTED FROM PARSE SERVER TO GENERATE MORE IDs IN THE FUTURE
// Returns a new random alphanumeric string of the given size.
//
// Note: to simplify implementation, the result has slight modulo bias,
// because chars length of 62 doesn't divide the number of all bytes
// (256) evenly. Such bias is acceptable for most cases when the output
// length is long enough and doesn't need to be uniform.
//  function randomString(size: number): string {
//     if (size === 0) {
//         throw new Error('Zero-length randomString is useless.');
//     }
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
//     let objectId = '';
//     const bytes = randomBytes(size);
//     for (let i = 0; i < bytes.length; ++i) {
//         objectId += chars[bytes.readUInt8(i) % chars.length];
//     }
//     return objectId;
// }