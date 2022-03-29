// Esse tratamento de erro tem o objetivo de validar se a função está recebendo
// os parametros corretos, caso receba retorne a array com os valores
// Os parametros são: uma array e o tamanho correspondente a mesma 



//função criada
function validaArray (arr,num){
    try{
        //Primeira validação: Se os parametros não forem enviados, lançar um erro do tipo ReferenceError
        if(!arr && !num) throw new ReferenceError ('Envie parâmetros');
        //Segunda validação: Se o array não for do tipo 'object', lançar um erro do tipo TypeError
        if(typeof arr !== 'object') throw new TypeError ('Array precisa ser do tipo object');
        //Terceira validação: se o número não for do tipo 'number', lançar um erro do tipo TypeError
        if(typeof arr !== 'number') throw new TypeError ('Num precisa ser do tipo number');
        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangerError
        if(arr.lenght !== num) throw new RangeError ('Tamanho invalido');
    
         return arr;
    }catch(e){
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);

        }else if (e instanceof ReferenceError){
            console.log("Este erro é um TypeError");
            console.log(e.message);

        
        }else if (e instanceof ReferenceError){
            console.log("Este erro é um Ranger");
            console.log(e.message);


        }else{
            console.log('Tipo de erro não esperado:' + e);
        }

    }

}

//testes 

//Sem parametros
console.log(validaArray());

//Se a array não for do tipo Object
console.log(validaArray(5,5));

//Se o tamanho não for um NUMERO
console.log(validaArray([] , 'a'));

//Se a array não for do tamanho correspondente
console.log(validaArray([], 5));

//correto
console.log(validaArray([5, 4 , 3 , 2 , 1], 5));
