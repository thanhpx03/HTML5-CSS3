const username=["linh","ha","hang","son","an","thuy","thanh","An"];
username.unshift("sontv");
username.splice(0,1);
username.pop();
username.splice(4,1);
for(let item of username){
    document.writeln(item+'<hr>');
}
