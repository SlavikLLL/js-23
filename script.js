 let cache = new Map();
function cacheFunc(func){
   
    return function(x){
    if(!cache.has(x)){
        
       let newNumber = func(x);
       console.log("Новое значение");
       cache.set(x,newNumber);
       
       
    }
    else{
         return console.log("уже есть");
    }
    return cache.get(x);
    
    
    
}
}
function foo(x){
   
if(cache.size>10){
    cache.delete(x-1);
}    
    return console.log(x+10);
   
}

foo = cacheFunc(foo);

foo(2);
foo(4);
foo(2);


console.log("Всего в кеше "+ " " +cache.size);





