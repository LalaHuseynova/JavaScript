let sentence = document.getElementById('sentence')
let result = document.getElementById('result')
let str2
let str

function convert() {
    if (sentence.value == '') 
    {
        alert('Write what you wish')
        return

}
    else {
        let arr = []
        str = sentence.value //'hello world'
        str2 = str.split(' ') // ['hello','world']
        for (let i = 0; i < str2.length; i++) {
            let upper = str2[i].charAt(0).toUpperCase()
            arr.push(upper + str2[i].slice(1))
        }
        result.innerHTML = arr.join(' ')
        sentence.value = ''
    }
}
