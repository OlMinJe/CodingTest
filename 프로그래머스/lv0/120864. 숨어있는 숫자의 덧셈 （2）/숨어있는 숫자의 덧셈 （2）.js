const solution = my_string => my_string.replace(/[A-z]/g, " ").split(' ').reduce((a,b) => a+Number(b), 0);