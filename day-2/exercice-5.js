export const my_display_combv2 = () => {
    const tab = [];
    let index = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                if (j > i && k > j) {
                    tab[index] = i + ' ' + j + ' ' + k;
                    index++;
                }
            }
        }
    }
    return tab;
}
