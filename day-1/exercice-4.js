export const my_size_alpha = (str) => {
    let len = 0;
    while ((typeof str[len]) !== 'undefined') {
        len++;
    }
    return len;
}
