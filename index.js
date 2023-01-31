function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return returnsANamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}