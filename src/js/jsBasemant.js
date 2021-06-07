function baseConverter (decNumber ,base){
    let num = decNumber;
    let digist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultArr = [];
    let temp;
    if( base <2 || base >36){return;}
    while ( num > 0){
        temp = Math.floor(num % base);
        resultArr.push(temp);
        num = Math.floor(num / base);
    }
    return resultArr.map(item => digist[item]).reverse().join("");
}
console.log(baseConverter(2323,2));
//ceshi yong 

