def insertarEnCadena(cadena, caracter):
    cadenaNueva = ''
    for posicion in range(len(cadena)):
        cadenaNueva = cadenaNueva + cadena[posicion]
        if ((posicion+1)%3) == 0:
            cadenaNueva = cadenaNueva + caracter
    return cadenaNueva

print(insertarEnCadena('2552552550','.'))