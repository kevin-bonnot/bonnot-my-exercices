export const my_alpha_reverse = (str) => {
    let res = '';
    let len = 0;
    while ((typeof str[len]) !== 'undefined') {
        len++;
    }

    for (let i = len - 1; i >= 0; i--) {
        res += str[i];
    }

    return res;
}
