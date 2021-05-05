import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplcar,
    btnRestar,
    btnSumar,
    armarNumero,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc accion={limpiar} color="#9b9b9b" texto="c" />
        <BotonCalc accion={positivoNegativo} color="#9b9b9b" texto="+/-" />
        <BotonCalc accion={btnDelete} color="#9b9b9b" texto="del" />
        <BotonCalc accion={btnDividir} color="#ff9427" texto="/" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="7" />
        <BotonCalc accion={armarNumero} texto="8" />
        <BotonCalc accion={armarNumero} texto="9" />
        <BotonCalc accion={btnMultiplcar} texto="X" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="4" />
        <BotonCalc accion={armarNumero} texto="5" />
        <BotonCalc accion={armarNumero} texto="6" />
        <BotonCalc accion={btnRestar} texto="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="1" />
        <BotonCalc accion={armarNumero} texto="2" />
        <BotonCalc accion={armarNumero} texto="3" />
        <BotonCalc accion={btnSumar} texto="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} ancho texto="0" />
        <BotonCalc accion={armarNumero} texto="." />
        <BotonCalc accion={calcular} texto="=" color="#ff9427" />
      </View>
    </View>
  );
};
