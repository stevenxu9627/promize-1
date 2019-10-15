// const syncCallbacker = null;

// const asyncCallbacker = null;

function a(){};
function b() {};
function syncCallbacker(a, b){
    if(typeof a !== 'function' || typeof b !== 'function'){
        throw 'error';
    }
    let aResult = a();
    let bResult = b(aResult);
    return bResult;
}


function asyncCallbacker(a,b){
    if(typeof a !== 'function' || typeof b !== 'function'){
        throw 'error';
    }
    const done = (data) => {
        b(data,done);
    }
    a(data = null,done)
}

module.exports = { syncCallbacker, asyncCallbacker };
