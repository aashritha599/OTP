var characters="achgff467UJMBD@67^&$";
var password=" ";
var length=prompt("Enter the length of the password");
alert("Answer the below question with yes or no");
var generate=prompt("Do you want to generate your password?");
while(generate=="yes"){
    for(let i=0;i<length;i++){
        password+=characters[Math.floor(Math.random()*10)];
    }
    console.log(password);
    password=" ";
    var generate=prompt("Do you want to generate a new one?");
}
