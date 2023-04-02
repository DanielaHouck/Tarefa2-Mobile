import { Text, StyleSheet } from "react-native";
import React from "react";

export default function NumberRandon(props) {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomNumber(props);
    numbers.push(randomNumber);
  }
  return (
    <>
     <Text style={styles.titulo}>Componente Aleatório</Text>

      <Text style={styles.valores}>{numbers.join(" + ")}</Text>

      <Text style={styles.resultado}>
        Soma dos 5 valores: {numbers.reduce((total, current) => total + current, 0)}
      </Text>
    </>
  );
}

const getRandomNumber = (props) => {
  return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
};

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: "steelblue",
        marginTop: 100,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Cochin',
    },
    valores: {
        fontSize: 40,
        color: "steelblue",
        backgroundColor: 'powderblue',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 30,
        padding: 20,
    },
    resultado: {
        color: "coral",
        fontSize: 26,
        marginTop: 40,
        textAlign: 'center',
    },
});
