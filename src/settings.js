export const REGEX =
{
    // eslint-disable-next-line
    REGEX_MAIL: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
    // eslint-disable-next-line
    REGEX_LOGIN: /^((\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+)|\w+)$/,
    // eslint-disable-next-line
    REGEX_URL: /^(https?):\/\/(-\.)?([^\s\\/?\.#-%=]+\.?)+(\/[^\s]*)?$/,
    REGEX_NUMBER_NATURAL: /^[0-9]*$/,
    REGEX_NUMBER_TWO_DECIMALS: /^[0-9]+(.[0-9]{0,2})?$/,
    REGEX_NUMBER_EIGHT_DECIMALS: /^[0-9]+(.[0-9]{0,8})?$/,
    REGEX_NUMBER_INT_EIGHT_DECIMALS: /^-?[0-9]+(.[0-9]{0,8})?$/,
    REGEX_NUMBER_INT_EIGHT_DECIMALS_DNI: /^-?[1-9].([0-9]{0,8})?$/,
    REGEX_DNI: /^([0-9]){1,10}$/,///^(?!(0))[0-9]$/,
    REGEX_NUMBER_INT_FOUR_DECIMALS: /^-?[0-9]+(.[0-9]{0,4})?$/,
    INT32_MAX: 2147483648,
    INT16_MAX: 32768,
    EXPIRATIONDATE: /^[0-9]{0,2}-([0-9]{0,2})?$/,
    CARDNUMBER: /^[0-9\s]*$/,
    REGEX_PASSWORD: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    REGEX_YOUTUBE: /^https?:\/\/((www\.)?youtube\.com\/watch\?[\S]v=[a-zA-Z0-9_-]+[\S]|youtu\.be\/[a-zA-Z0-9_-]+[\S]*)$/,
    REGEX_STRING_NAME: /^[A-Za-z]+(([,.] |[ '-])[A-Za-z]+)*([.,'-]?)$/,
    REGEX_ALPHANUMERIC_TEN_CHARACTERS: /^([a-zA-Z0-9]){1,10}$/,
    REGEX_ALPHANUMERIC_SPECIAL_CHARACTERS: /^([!"#$%&/()=*¨?¡a-zA-Z0-9]){1,15}$/,
    REGEX_ALPHABETIC_SPECIAL_CHARACTERS: /^([!"#$%&/()=*¨?¡a-zA-Z]){1,15}$/,
    REGEX_SPECIAL_CHARACTERS: /^([!"#$%&/()=*¨?¡]){1,15}$/,
    REGEX_ALPHABETIC: /^([a-zA-Z]){1,50}$/,
    REGEX_ALPHABETIC_SPECIAL: /^([a-zA-Z´'`]){1,50}$/,
    REGEX_NUMERIC_TEN_DIGITS: /^([0-9]){1,10}$/,
    REGEX_TEL_ARG_COD_AREA: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
}