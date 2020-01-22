function myExport(a,b){
	if(typeof a != typeof b) throw new Error("Not like datatype");
	console.log("Hello world");
}

myExport("KK",4);