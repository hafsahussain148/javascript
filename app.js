
//CLOSURE

function closure(num){
    return function(clnum){
        clnum= 10;
        console.log(num + clnum);
    }
}
let output=closure(34);
output()


//recursive func to search a value
function recursive(arr, l, r, num)
{
	if (r < l)
		return -1;
	if (arr[l] == num)
		return l;
	if (arr[r] == num)
		return r;
	return recursive(arr, l+1, r-1, num);
}
	
	let arr = [10,20,30,40,50,60,70,80,90,100];
	let n = arr.length;
	let num = prompt("enter the num to search");
	let index = recursive(arr, 0, n - 1, num);

    document.write(arr)

	if (index != -1){
	document.write('true');
	}
	else{
		document.write("false");
	}
	

//HTML tag


function newTag(input)
{
    
    const para = document.createElement("p");
    para.innerText = ` ${input} `;
    document.body.appendChild(para);

}
newTag("hi there");

//unordered list
function addItem(output)
{
var node = document.createElement('li');
let hee=node.appendChild(document.createTextNode(output));
document.querySelector('ul').appendChild(hee);

}
addItem('hello');

//change color
function changeColor(arg, color)
{
    let mypara= document.querySelector(arg);
    mypara.style.backgroundColor= color;
    
}
changeColor('<p>','blue')


//local storage function

function save(name, reply){
    localStorage.setItem(name ,reply);
}

save('course','JS');

//local storage retrieving
function retrieve(name){
    localStorage.getItem(name);   
}
retrieve('course');

// function save objedct
let students=[];
function saves(sname, fname){
    let std={
        stdname: sname,
        fatherN:fname 
    };
    students.push(std)
    console.log(students);
    let stringify=JSON.stringify(students);
    localStorage.setItem("students", stringify)
    data = JSON.parse(localStorage.getItem("students"))
 print(data)
}

saves('mia','hmed')




    