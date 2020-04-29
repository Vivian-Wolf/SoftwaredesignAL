"use strict";
var L02;
(function (L02) {
    let msg = prompt("please give me a sentence");
    reverseWords(msg);
    reverseWordOrder(msg);
    reverseEverything(msg);
    function reverseWords(_str) {
        let tmp = splitStr(msg);
        let i = 0;
        while (i < tmp.length) {
            tmp[i] = reverseStr(tmp[i]);
            i++;
        }
        _str = joinArr(tmp);
        console.log(_str);
    }
    function reverseWordOrder(_str) {
        let tmp = splitStr(msg);
        tmp = reverseArr(tmp);
        _str = joinArr(tmp);
        console.log(_str);
    }
    function reverseEverything(_str) {
        _str = reverseStr(_str);
        console.log(_str);
    }
    function splitStr(_str) {
        let arr = new Array();
        let tmp = "";
        let last = _str.length - 1;
        let i = 0;
        while (i < _str.length) {
            if (_str[i] == " ") {
                arr.push(tmp);
                tmp = "";
            }
            else if (i == last) {
                tmp = tmp.concat(_str[i]);
                arr.push(tmp);
                tmp = "";
            }
            else {
                tmp = tmp.concat(_str[i]);
            }
            i++;
        }
        return arr;
    }
    function joinArr(_arr) {
        let str = "";
        let last = _arr.length - 1;
        let i = 0;
        while (i < _arr.length) {
            str = str.concat(_arr[i]);
            if (i != last) {
                str = str.concat(" ");
            }
            i++;
        }
        return str;
    }
    function reverseArr(_arr) {
        let tmp;
        let last = _arr.length - 1;
        let i = 0;
        while (i < _arr.length / 2) {
            tmp = _arr[i];
            _arr[i] = _arr[last - i];
            _arr[last - i] = tmp;
            i++;
        }
        return _arr;
    }
    function reverseStr(_str) {
        let tmp = "";
        let out = _str.split("");
        let last = _str.length - 1;
        let i = 0;
        while (i < _str.length / 2) {
            tmp = out[i];
            out[i] = _str[last - i];
            out[last - i] = tmp;
            i++;
        }
        _str = out.join("");
        return _str;
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=AlexJaroch.js.map