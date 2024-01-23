const f = function* (inclusiveLimit) {
    let i = 0;
    while (++i <= inclusiveLimit)
        yield i;
}

const g = f(10);

for (const v of g)
    console.log(v);
