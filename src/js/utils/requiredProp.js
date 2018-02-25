export default function requiredProp(name) {
    throw new Error(`Property '${name}' is required`);
}
