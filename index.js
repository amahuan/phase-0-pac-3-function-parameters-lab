function introduction(name){
    return `Hi, my name is ${name}.`;
    
}
console.log(introduction("Amanda"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`};
}
console.log(introductionWithLanguage("Amanda","python"));

function introductionWithLanguageOptional(name, language="Javascript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`};
}
console.log(introductionWithLanguageOptional("Amanda"));

