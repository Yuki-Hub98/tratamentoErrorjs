# tratamentoErrorjs

##

Esse tratamento de erro tem o objetivo de validar se a função está recebendo, os parametros corretos, caso receba retorne a array com os valores.</br>
Os parametros são: uma array e o tamanho correspondente a mesma. </br>
Foi efetuada a criação de uma função Utilizando o ``` Try cath  ```, foi efetuada quatro validações: </br>
- Primeira validação: Se os parametros não forem enviados, lançar um erro do tipo ``ReferenceError``
- Segunda validação: Se o array não for do tipo 'object', lançar um erro do tipo ``TypeError``
- Terceira validação: se o número não for do tipo 'number', lançar um erro do tipo ``TypeError``
- Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo ``RangerError``
