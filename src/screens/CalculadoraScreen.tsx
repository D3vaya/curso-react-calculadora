import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,5000</Text>
      <Text style={styles.resultado}>1,5000</Text>
      <View style={styles.fila}>
        <BotonCalc color="#9b9b9b" texto="c" />
        <BotonCalc color="#9b9b9b" texto="+/-" />
        <BotonCalc color="#9b9b9b" texto="del" />
        <BotonCalc color="#ff9427" texto="/" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" />
        <BotonCalc texto="8" />
        <BotonCalc texto="9" />
        <BotonCalc texto="X" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" />
        <BotonCalc texto="5" />
        <BotonCalc texto="6" />
        <BotonCalc texto="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" />
        <BotonCalc texto="2" />
        <BotonCalc texto="3" />
        <BotonCalc texto="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc ancho texto="0" />
        <BotonCalc texto="." />
        <BotonCalc texto="=" color="#ff9427" />
      </View>
    </View>
  );
};
