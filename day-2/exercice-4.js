export const my_display_comb = () => {
    const tab = [];
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            tab[i] = i + ' ' + j;
        }
    }
    return tab;
}
