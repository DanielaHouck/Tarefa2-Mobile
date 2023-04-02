import { View, StyleSheet } from 'react-native';
import React from "react";
import Palavras from "../Tarefa2/componentesDani/Palavras";

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Palavras max={45} min={5} />
    </View>
  );
}