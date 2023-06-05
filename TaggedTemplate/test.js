function highlight([first, ...strings], ...values){
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()].join(''),
        [first]
    )
}

var course = "Javascript";
var brand = "F8";

const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);