function addIEDSource(a, b) {
    return (100.0 - (100.0 * (1.0 - a / 100.0) * (1.0 - b / 100.0))).toFixed(2);
}

function isANumber(str)
{
    let num = Number(str);
    if (isFinite(num))
        return num;
    else
        return 0;
}

function isValidString(str)
{
    let list = ['/', '\\', '&', ';', '!', "?", "<", ">"];
    for (char in list) {
        str = str.replace(char, '');
    }
    return str;
}