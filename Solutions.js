var intervalObj ;
var counTime = 0;
setInterval(() => {
    counTime++;
  }, 1);
function  unique(stringWord) {
    let arrayString =  stringWord.split('');
    let colection = [arrayString[0]];
    arrayString.forEach(w1 =>{ 
        if(!colection.some( w2 => w1 ===  w2)){
            colection.push(w1);
        }
    });
    return colection;
}
function minWord(arrayWord,uniqueWord){
    let result = new Map();
    arrayWord.forEach(word =>{     
        uniqueWord.forEach((w)=>{
            let re = new RegExp(w,'g');
            let wordMatch = word.match(re);
            let lengthWord = wordMatch == null?0:wordMatch.length;
            if(result.get(w) == undefined){
                result.set(w,lengthWord); 
            }else{
                if(result.get(w) > lengthWord){
                    result.set(w,lengthWord);
                }
            }
        });
    });
    return result;
}
class Solutions {
    f1(...stringWord){
        let allWord = stringWord;
        let allWordUnique = unique(stringWord.reduce((before,after)=> before+after));
        let keyWord = minWord(allWord,allWordUnique);
        let sum = 0;
        allWord.forEach(word =>{
            keyWord.forEach((value,key)=>{
                let re = new RegExp(key,'g');                
                let wordMatch = word.match(re);
                let lengthWord = wordMatch == null?0:wordMatch.length;
                sum += lengthWord -value;
            });                      
        });
        return sum;
    }
    f2(arrayData,arraySearch){
        let arrayResult = [];
        arraySearch.forEach((text1)=>{
            let result = arrayData.filter((text2)=> text2 == text1);
            arrayResult.push(result.length);
        });
        return arrayResult;
    }
    f3(hostname){
        let result = [];
        let re = new RegExp('^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$','g');                
        let wordMatch = hostname.match(re);
        if(wordMatch !== null){
            result = hostname.split('.');
        }
        return result.length;
    }
    f4(cb){
        console.log(counTime);
        counTime =0;
        clearInterval(intervalObj);
        intervalObj = setInterval(() => {
            console.log('interviewing the interval',cb(),' time: ',counTime);
            counTime = 0;
            return cb();
        }, 3000);
    }
}
module.exports = Solutions;