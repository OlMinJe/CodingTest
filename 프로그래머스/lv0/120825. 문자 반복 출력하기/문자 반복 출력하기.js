const solution = (my_string, n) => my_string.split("").reduce((p,e) => p+=e.repeat(n),'');