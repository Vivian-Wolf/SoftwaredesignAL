namespace L02 {
    let msg: string = prompt("please give me a sentence");
    reverseWords(msg);
    reverseWordOrder(msg);
    reverseEverything(msg);

    function reverseWords(_str: string): void {
        let tmp: string[] = splitStr(msg);
        let i: number = 0;
        while (i < tmp.length) {
            tmp[i] = reverseStr(tmp[i]);
            i++;
        }
        _str = joinArr(tmp);
        console.log(_str);
    }
    function reverseWordOrder(_str: string): void {
        let tmp: string[] = splitStr(msg);
        tmp = reverseArr(tmp);
        _str = joinArr(tmp);
        console.log(_str);
    }
    function reverseEverything(_str: string): void {
        _str = reverseStr(_str);
        console.log(_str);
    }
    function splitStr(_str: string): string[] {
        let arr: string[] = new Array<string>();
        let tmp: string = "";
        let last: number = _str.length - 1;
        let i: number = 0;
        while (i < _str.length) {


            if (_str[i] == " ") {
                arr.push(tmp);
                tmp = "";
            } else if(i == last)
            {
                tmp = tmp.concat(_str[i]);
                arr.push(tmp);
                tmp = "";
                
            } else {
                tmp = tmp.concat(_str[i]);
            }
            i++;
        }

        return arr;
    }
    function joinArr(_arr: string[]): string {
        let str: string = "";
        let last: number = _arr.length - 1;
        let i: number = 0;
        while (i < _arr.length) {
            str = str.concat(_arr[i]);
            if (i != last) {
                str = str.concat(" ");
            }
            i++;
        }
        return str;
    }
    function reverseArr(_arr: string[]): string[] {
        let tmp: string;
        let last: number = _arr.length - 1;
        let i: number = 0;
        while (i < _arr.length / 2) {
            tmp = _arr[i];
            _arr[i] = _arr[last - i];
            _arr[last - i] = tmp;
            i++;
        }
        return _arr;
    }
    function reverseStr(_str: string): string {

        let tmp: string = "";
        let out: string[] = _str.split("");
        let last: number = _str.length - 1;
        let i: number = 0;
        while (i < _str.length / 2) {
            tmp = out[i];
            out[i] = _str[last - i];
            out[last - i] =  tmp;
            
            i++;
        }
        _str = out.join("");
        return _str;
    }

}