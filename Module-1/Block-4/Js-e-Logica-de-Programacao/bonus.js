function square (height, width){
    let form = [];
    for (let i=0; i<width; i++){
        form.push('#');
    }
    for (let i=0; i<height; i++){
        console.log(form.join(' '));
    }
}

function triangleLeft(height){
    let form = [];
    for (let i=0; i<height; i++){
        form.push('#');
        console.log(form.join(' '));
    }
}

function triangleRight(height){
    let form = [];
    for (let i=0; i<height; i++){
        form.push(' ');
    }
    for (let i=height-1; i>=0; i--){
        form[i]='#';
        console.log(form.join(' '));
    }
}
console.log('------------------');
square(5,5);
console.log('------------------');
triangleLeft(5);
console.log('------------------');
triangleRight(5);
console.log('------------------');