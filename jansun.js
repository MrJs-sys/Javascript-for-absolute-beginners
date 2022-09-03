//program to find whether 1st Jan was a sunday since 2014 to 2050

for(var year = 2014; year<=2050; year ++){
    var d = new Date(year, 0, 1);
    if(d.getDay()==0){
        console.log("Sunday"+year);
    }


}