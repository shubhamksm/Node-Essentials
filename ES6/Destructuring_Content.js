/*
    Destructuring is a convenient way of extracting multiple values from data stored in arrays or objects into distinct variables.

    JavaScript allows constructing arrays / objects, one property at a time or multiple properties at a time.

    const name = { first: 'Kim', last: 'Johnson' };
    However, extracting data had to be done one property at a time. There was no way to extract multiple properties at a time.

    const firstname = name.first;
    const lastname = name.last;
    Destructuring in ES6, addresses this problem!

    Taking array elements directly into variables:
    var [one, two, three, four] = ["chennai", "mumbai", "goa", "cochin"];  
    //console.log(one);  => chennai
    Skipping values and taking second array element in variable two:
    var [,two,,]=["chennai", "mumbai", "goa", "cochin"];
    //console.log(two);  => mumbai
    Destructuring Nested Arrays:
    const [one, two, three] = [ 1,  [2,3],  [4,5] ];    
    //one=> 1 two=> [2,3], three=>[4,5]
*/

// Destructuring Objects
/*
    In Objects, variables can be skipped using commas.

    Example of taking object elements directly into variables:

    var {firstName:first,lastName:last,...details}={
            firstName:  "Neha",
            lastName:   "Singh",
            age:     40,
            city:   "chennai",
            phone:   980000000
    }

    console.log (first , details);
    //output: Neha {age: 40, city: "chennai", phone: 980000000}
*/

// Destructuring Nested Objects
/*
    Declaration below would assign values a = 1, b = 2 and c = { four: 4, five: 5}
    const {one: a, two: b, three: c}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;   
    For readability we can use one:one instead of one:a. Declaration below would assign:
    one = 1, two = 2 and three = { four: 4, five: 5}

    const {one: one, two: two, three: three}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;
    Similarly, the declaration below will assign:
    one = 1, two= 2 and three= 3

    const {one, two, three} = { one: 1, two: 2, three: 3 };
    Default values can also be used in destructuring
    const {one, two, three, four=4} = { one: 1, two: 2, three: 3 };
*/
