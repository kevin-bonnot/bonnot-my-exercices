export const my_display_alpha = () => {
    let res = 'a';
    for (let i = 98; i < 123; i++) {
        res = res + String.fromCharCode(i);
    }
    return res;
}
