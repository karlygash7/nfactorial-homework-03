let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2 || 3:
        alert( '2,3' );
        break;
    default:
        alert('vvvvvvvv');
        break;
}

