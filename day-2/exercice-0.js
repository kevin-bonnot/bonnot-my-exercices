export const my_display_forever_42 = (nbr) => {
    if (!nbr || (typeof nbr) !== 'number')  {
        return 42;
    }

    return nbr;
}
