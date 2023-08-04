//khai bao bien

let numbers = document.getElementsByClassName("num");
let numbersLength = numbers.length;
let phepToans = document.getElementsByClassName("ky_tu");
let phepToansLength = phepToans.length
//ham ho tro
function formart_str(num) {
    if (num == "-") {
        return "";
    }
    else {
        let n = Number(num);
        let result = n.toLocaleString("en")
        return result;
    }
}
function delete_formart(str) {
    return Number(str.replace(/,/g, ""))
}
function set_ket_qua_cu(num) {
    document.getElementById("gia_tri_save").innerText = num;
}
function get_ket_qua_save() {
    return document.getElementById("gia_tri_save").innerText;
}
function set_ket_qua(num) {
    if (num == "") {
        document.getElementById("gia_tri_nhap").innerText = num
    } else {
        document.getElementById("gia_tri_nhap").innerText = formart_str(num);
    }
}
function get_kq() {
    return document.getElementById("gia_tri_nhap").innerText
}
// function checkNum(str) {
//     let strNew = str.substring(0,str.length-1);;
//     let arrStr = str.split('');
//     let arrStrLength = arrStr.length;
//     for (let i = arrStrLength - 2; i >= 0; i--) {
//         if (isNaN(arrStr[i])) {
//             strNew = str.substring(i+1,str.length-1)
//         }
//     }
//     return strNew
// }
function formart_Calculation(str) {
    str = str.replace(/÷/g, "/")
    str = str.replace(/x/g, "*")
    return str
}
for (let i = 0; i < phepToansLength; i++) {
    phepToans[i].addEventListener("click", function () {
        if (this.innerText == "C") {
            set_ket_qua("0");
            set_ket_qua_cu("");
        }
        else if (this.innerText == "CE") {
            let strFm = delete_formart(get_kq()).toString();
            strFm = strFm.substring(0, strFm.length - 1)
            set_ket_qua(strFm)
        }
        else {
            var kq = get_kq();
            var kq_cu = get_ket_qua_save();
            if (kq != "") {
                kq = delete_formart(kq);
                kq_cu = kq_cu + kq;
                if (this.innerText == "=") {
                    var final = eval(formart_Calculation(kq_cu));
                    set_ket_qua(final);
                    set_ket_qua_cu("");
                }
                else if (this.innerText == "%"){
                    set_ket_qua(delete_formart(get_kq()) / 100);
                }
                else {
                    kq_cu = eval(formart_Calculation(kq_cu)) + this.innerText 
                    set_ket_qua_cu(kq_cu);
                    set_ket_qua("");
                }
            }
            else if (kq_cu != "" && this.innerText != "CE" && this.innerText != "=" && this.innerText != "%") {
                if (this.innerText != kq_cu[kq_cu.length - 1]) {
                    kq_cu = kq_cu.replace(kq_cu[kq_cu.length - 1], this.innerText)
                    set_ket_qua_cu(kq_cu);
                }
            }
        }
    })
}

for (let i = 0; i < numbersLength; i++) {
    numbers[i].addEventListener("click", function () {
        var so = delete_formart(get_kq())
        if (so != NaN) {
            so += this.innerText
            set_ket_qua(so);
        }
    })
}
