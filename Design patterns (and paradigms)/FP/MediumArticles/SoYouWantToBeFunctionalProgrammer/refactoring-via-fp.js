// FP is good when trying to refactor existing code by PARAMETERIZING the similar parts, for example:

// function validateSSN(ssn) {
//     if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn))
//         console.log('Valid SSN');
//     else
//         console.log('Invalid SSN');
// }

// function validatePhone(phone) {
//     if (/^\(\d{3}\)\d{3}-\d{4}$/.exec(phone))
//         console.log('Valid Phone');
//     else
//         console.log('Invalid Phone');
// }

// // ...can be rewritten by parameterizing the similar parts like 
// // - 'phone'/'ssn' as 'value',
// // - "SSN"/"Phone" as 'type',
// // - '/^\d{3}-\d{2}-\d{4}$/' and '/^\(\d{3}\)\d{3}-\d{4}$/' as 'regex'.

// function validateValue(value, regex, type) {
//     if (regex.exec(value)) console.log('Valid ' + type);
//     else console.log('Invalid ' + type);
// }
function validateValueWithFunc(value, parseFunc, type) {
    if (parseFunc(value))
        console.log('Invalid ' + type);
    else
        console.log('Valid ' + type);
}

function createRegexParser(regex) {
    return regex.exec.bind(regex);
}

var parseSsn = createRegexParser(/^\d{3}-\d{2}-\d{4}$/);
var parsePhone = createRegexParser(/^\(\d{3}\)\d{3}-\d{4}$/);
validateValueWithFunc('123-45-6789', parseSsn, 'SSN');
validateValueWithFunc('(123)456-7890', parsePhone, 'Phone');
// validateValueWithFunc('123 Main St.', parseAddress, 'Address');
// validateValueWithFunc('Joe Mama', parseName, 'Name');