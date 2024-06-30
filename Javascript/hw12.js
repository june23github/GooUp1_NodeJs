const containNumber = `Contrar1977y to popular belief, Lor55em Ipsum is not simply random tex1995t. It has roots in a piece of clas2023sical Latin lit4erature from 1990 BC, making it over 2000 years old. Richard McCl000intock, a Latin professor at Hampden-Sydney College in Virginia, looked up on1e of the mo21re obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ips1982um comes from sections 2014 and 2015 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 1945 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 2011. The standard chunk of Lorem Ipsum used since the 1948 is reproduced below for those interested. Sections 1945 and 1946 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some? There are m1980any variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you a2014re going to use a passage of Lorem Ipsum, you need to be sure th2002ere isn\'t anything embarrassing hidden in the midd1999le of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 1947 Latin words, com1975bined with a handful 1948of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore alwa2012ys free from repetition, injected humour, or non-characteristic words etc. paragraphs words bytes lists Start with \'Lorem ipsum dolor sit amet...\'`;

const result = new Map();

function findYearsInString(string) {
    return string.match(/\d{4}/g);
}

function findDecadeMax(years) {
    for (let year of years) {
        let century = Math.floor(year / 100) + 1;
        let decade = Math.floor((year % 100) / 10) * 10;
        if (String(decade).length == 1) decade = "0" + decade;
        let temp = String(century) + String(decade);
        result.has(temp) ? result.set(temp, result.get(temp) + 1) : result.set(temp, 1);
    }
    let countMax = 0;
    let yearAndDecadeMax = '';
    for (let [key, value] of result){
        if (value > countMax){
            countMax = value;
            yearAndDecadeMax = key;
        }
    }
    return yearAndDecadeMax;
}

const years = findYearsInString(containNumber);
const max = findDecadeMax(years);

console.log(years);

console.log(result);

console.log(`Thap nien ${Number(max%100)} cua the ki ${Number(Math.floor(max/100))}`);
    


