/*
Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

Funkcja ma zwracać true, jeśli jedna z liczb jest równa 20 lub jeśli suma tych dwóch liczb jest mniejsza lub równa 20.

Wgraj plik do zdalnego repozytorium i podeślij link do sprawdzenia.
*/


function warunek(n1, n2) {

    if (((n1 == 20) || (n2 == 20)) || (n1 + n2 < 20)) {
        return true;
    } else {
        return false;
    }



}

function tst(val, n1, n2 ) {
    var tst = warunek(n1, n2);
    var tstres = "failed: ";
    if (val == tst) {
        tstres = "passed: "
    };
    console.log(tstres, n1, " ", n2, " ", warunek(n1, n2));
}

tst(false,13, 14);
tst(true,20, 14);
tst(true,123, 20);
tst(true,12, 7);
