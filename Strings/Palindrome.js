const Palindrome = (str) =>{

    let strArray = str.split('');
    let reverseArray = strArray.reverse();
    let newArray = reverseArray.join('');

    return newArray


}
console.log(Palindrome("This is javascript"))