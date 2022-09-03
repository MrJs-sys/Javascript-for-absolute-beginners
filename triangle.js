let x = prompt("Enter the length of the triangle: ");
let y = prompt("enter the base of the triangle: ");
let z = prompt("Enter the height of the triangle: ");

res = (x,y,z) => {
    return (x+y+z)/2;
} 

area = (x,y,z) => {
    return(0.5*(y*z));
}

let result = res(x,y,z);
console.log(result);

let ares = area(x,y,z);
console.log(result);

//by heron's formula A=sqrt.s(s-a)*(s-b)*(s-c)

heron = () => {
    return Math.sqrt(s*((s-a)*(s-b)*(s-c)));
}
 let areh = heron(x,y,z); 
 console.log(areh);