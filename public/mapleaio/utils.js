function addIEDSource(a, b) {
    return 100.0 - (100.0 * (1.0 - a / 100.0) * (1.0 - b / 100.0));
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
    return str;
}