//taking the values from an object to a variable=>

var car={
    engine:"V8",
    top_speed:"350KMPH",
    features:"spread legs"
};

console.log(car);
console.log("\n");

/*des = (car) => {
    var{a,b,c}=car;
    console.log(a);
    console.log(b);
    console.log(c);
}

var x = des();
conosle.log(x);*/

console.log(car.engine);

for(let x in car){
    console.log(x+":"+car[x]);
}

for(let a of "car"){
    console.log(a);
}