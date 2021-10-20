import { my_display_alpha } from "./exercice-1.js"

export const my_display_alpha_reverse = () => {
    const alpha = my_display_alpha();
    let res = '';
    let len = 0;
    while ((typeof alpha[len]) !== 'undefined') {
        len++;
    }

    for (let i = len - 1; i >= 0; i--) {
        res += alpha[i];
    }

    return res;
}
