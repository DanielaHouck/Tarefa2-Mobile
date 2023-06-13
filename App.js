import { View, StyleSheet } from 'react-native';
import React from "react";
import Palavras from "./componentes/Palavras";

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Palavras max={45} min={5} />
    </View>
  );
}