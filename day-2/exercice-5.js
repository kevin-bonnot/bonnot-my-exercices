export const my_display_combv2 = () => {
    const tab = [];
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            for (let k = 0; k < 100; k++) {
                tab[j] = i + ' ' + j + ' ' + k;
            }
        }
    }
    return tab;
}

console.log(my_display_combv2().length)