export const my_string_is_number = (str) => {
    let i = 0;
    while (str[i]) {
        if (parseInt(str[i], 10)) {
            return true;
        }
        i++;
    }
    return false;
}
