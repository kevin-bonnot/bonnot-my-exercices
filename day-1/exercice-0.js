export const my_sum = (a, b) => {
    if (a && b && (typeof a) === 'number' && (typeof b) === 'number') {
        return a + b;
    } else {
        return 0;
    }
}
