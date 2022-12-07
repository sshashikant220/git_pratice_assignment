
function checkprime(number){

	let factors = 0 ;
	for(let i = 0 ; i<number ; i++){
		if(number%i==0){
			factors++ ;
		}
	}
	if(factors==2){
		return true ;
	}else{
		return false ;
	}
}

let answer = checkprime(13) ;
if(answer==true){
	console.log("Prime") ;
}else{
	console.log("Not a Prime Number");
}
