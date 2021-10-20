export const my_length_array = (arr) => {
    let len = 0;
    while ((typeof arr[len]) !== 'undefined') {
        len++;
    }
    return len;
}
