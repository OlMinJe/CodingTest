const solution = sides => {    
    sides.sort(function(a, b)  {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    
    return (sides[2] < sides[0] + sides[1]) ? 1 : 2;
}