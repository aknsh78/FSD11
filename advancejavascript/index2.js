let regex=/hello/;
let regex=new regex("pattern");

int text="hello world hello hello";
int pattern=/hello/g;

console.log(pattern.test(text));

//common pattern
[abc]
[a-z]
[0-9]
int text="hello world hello hello";
int pattern=/hello/gi;
console.log(pattern.test(text));
//.->any character
//^->starting of the string
//dollor end of the string 
//\d digit point
//\w word character
//\s space character