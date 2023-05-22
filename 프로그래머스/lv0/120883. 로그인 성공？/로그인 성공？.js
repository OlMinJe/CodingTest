function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    const idItem = db.filter((i)=> i[0] === id);
    
    if(idItem.length===0) return 'fail';
    
    if(idItem[0][1] === pw) return "login";
    else return "wrong pw";
}