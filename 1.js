let cache = new WeakMap();
let fooCalls = 0;
function cacheFunc  (func){

    return function(obj){
        if(!cache.has(obj)){
            console.log("Новое значение")
            let result = func(obj.value);
            cache.set(obj,result);
        }
        else{
            console.log("Уже есть");
        }
        return cache.get(obj);
    }

}
 function foo(obj){
    
     
     console.log(obj+ " " +"Успешно проведено")
     
 }
 let obj = {name:"Петя",value:100};
 foo = cacheFunc(foo);
 let result1 = obj;
 let result2 = obj;
 foo(result1);
 foo(result2);
 foo(result2);
 foo(result1);
 let obj2 = {name:"Петя",value:1000};
 let result3 = obj2;
 foo(result3);
 
 
