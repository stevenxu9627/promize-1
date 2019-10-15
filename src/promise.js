const basicPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('basicPromise')
    },300);
    
});
const funcPromise = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout(function(){
            resolve('funcPromise')
        },300);
    })
}

const chainedPromise = prom => {
    return new Promise ((resolve, reject)=> {
        setTimeout(function(){
            let result = prom;
            resolve(result)
        },300);
    })
};
const rejectedPromise = () => null;



module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
