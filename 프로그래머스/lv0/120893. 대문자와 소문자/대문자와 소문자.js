function solution(my_string) {    
    return my_string.split("")
        .map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
        .join("");
}
