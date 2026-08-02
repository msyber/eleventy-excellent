/** Escapes a value for use inside a double quoted json string. */
export const escapeJson = value => JSON.stringify(String(value)).slice(1, -1);
