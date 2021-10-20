export const my_string_is_number = (str) => {
    if (parseInt(str, 10)) {
        return true;
    }
    return false;
}
