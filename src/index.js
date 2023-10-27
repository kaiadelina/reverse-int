module.exports = function reverse (n) {
   
        const reversedStr = n.toString().split('').reverse().join('');
        return parseInt(reversedStr, 10);
     
}
