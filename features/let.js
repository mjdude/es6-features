// useing let , i is not avaliable outsite of the code block
for (let i = 0; i < 3 ; i++) {
   console.log(`for loop: i = ${i}`);
}

// let is accessible inside innner blocks , but not other blocks
function genCallBack(){
  let name = 'Mo';

  return function () {
    console.log(`Hello ${name}`);
  }
};

genCallBack()();
