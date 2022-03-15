const value=5;

function printer (height, print){
    let form=[];
    for (let i=0; i<height; i++){
        form.push(print);
    };
    return form;
}

function square (height, width){
    let form = [];
    for (let i=0; i<width; i++){
        form.push('#');
    };
    for (let i=0; i<height; i++){
        console.log(form.join(' '));
    };
}

function triangleLeft(height){
    let form = printer(height, ' ');
    for (let i=0; i<height; i++){
        form[i]='#';
        console.log(form.join(' '));
    };
}

function triangleRight(height){
    let form = printer(height, ' ');
    for (let i=height-1; i>=0; i--){
        form[i]='#';
        console.log(form.join(' '));
    };
}
function pyramid(height){
    if (height%2!==0){
        let form = printer(height, ' ');
        let c=0;
        for (let i=0;i<height;i++){
            if ((i+1)%2!==0){
                form[(Math.floor(height/2)+1)+c]='#';
                form[(Math.floor(height/2)+1)-c]='#';
                console.log(form.join(' '));
                c++;
            }else{
                console.log(printer(height, ' ').join(' '))
            };
        };
    }else{
        console.log('Please, insert an odd number.');
    };
};
function hollowPyramid(height){
    if (height%2!==0){
        let form = printer(height, ' ');
        let c=0;
        for (let i=0;i<height-1;i++){
            if ((i+1)%2!==0){
                form[(Math.floor(height/2)+1)+c]='#';
                form[(Math.floor(height/2)+1)-c]='#';
                form[(Math.floor(height/2)+1)+c-1]=' ';
                form[(Math.floor(height/2)+1)-c+1]=' ';
                console.log(form.join(' '));
                c++;
            }else{
                console.log(printer(height,' ').join(' '));
            };
        };
        c=0;
        for (let i=0; i<height; i+=2){
            form[(Math.floor(height/2)+1)+c]='#';
            form[(Math.floor(height/2)+1)-c]='#';
            c++;
        };
        console.log(form.join(' '));
    }else{
        console.log('Please, insert an odd number.');
    };
};
function isItPrime (num){
    let sumUp=0;
    for (let i=1;i<=num;i++){
        if(num%i===0){
            sumUp++;
        };
    };
    if (sumUp<=2){
        console.log('O número '+num+' é primo.');
    }else{
        console.log('O número '+num+' não é primo.');
    };
};

console.log('---------1---------');
square(value,value);
console.log('---------2---------');
triangleLeft(value);
console.log('---------3---------');
triangleRight(value);
console.log('---------4---------');
pyramid(value);
console.log('---------5---------');
hollowPyramid(value);
console.log('---------6---------');
isItPrime(23);
