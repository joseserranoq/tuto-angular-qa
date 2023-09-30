export class MayorNumero {
    /** 
* Devuelve el elemento de mayor valor de una lista  @param list Un array de enteros
* @return El entero de mayor valor de la lista
*/
static obt_mayorNumero(lista: any) {
    var indice, max = Number.MIN_SAFE_INTEGER;
    for (indice = 0; indice < lista.length; indice++) {
        if (lista[indice] > max) {
            max = lista[indice];
        }
    }
    return max;
}
}
