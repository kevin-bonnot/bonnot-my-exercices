export const my_is_pos_neg = (nbr) => {
    if (nbr > 0) {
       return 'POSITIF';
    }

    if (nbr < 0) {
        return 'NEGATIF';
    }

    if (nbr === 0 ) {
        return 'NEUTRAL';
    }
}
