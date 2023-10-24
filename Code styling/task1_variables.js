// variables:
// 1) use 'let' and 'const', not 'var':
let a = 1;
const b = true;

// 2) do not define multiple in one row:
let c=4,d=5,e=6; // wrong!

// 3) try to minimze variable's scope
{
    let d = 1;
    {
        let v = 2;
    }
}

// 4) when using JSDoc, use EITHER 'inline' or 'above' annotation, not both at the same time

