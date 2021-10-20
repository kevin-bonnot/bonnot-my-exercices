export const my_size_alpha = (str) => {
    if (typeof str !== 'string') {
        return 0;
    }
    let len = 0;
    while ((typeof str[len]) !== 'undefined') {
        len++;
    }
    return len;
}

console.log(my_size_alpha(123))
