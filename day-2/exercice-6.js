import { my_display_alpha } from "../day-1/exercice-1.js";

export const my_display_unicode = (arr) => {
    const alpha = my_display_alpha();
    const alphaMaj = my_display_alpha().toUpperCase();
    let res = '';
    let i = 0;
    if (arr) {
        arr.forEach(element => {
            if (element >= 48 && element <= 57) {
                res +=  element - 48;
                i++;
            }
            if (element >= 65 && element <= 90) {
                res += alphaMaj[element - 65];
                i++;
            }
            if (element >= 97 && element <= 122) {
                res += alpha[element - 97];
                i++;
            }
            if (element === 32) {
                res += ' ';
                i++;
            }
        });
    }
    return res;
}
