function solution(s) {
    let str = s.split(' ');
     while(str.includes('Z')) {
        str.splice(str.indexOf('Z')-1,2);
    }
    return str.reduce((a,b) => a+=Number(b), 0)
}