var fibonanci = [];
fibonanci[0] = 0;
fibonanci[1] = 1;

for (i = 2; i < 20; i++) {
    fibonanci[i] = fibonanci[i - 2] + fibonanci[i - 1];
}

document.write(fibonanci.join(","));