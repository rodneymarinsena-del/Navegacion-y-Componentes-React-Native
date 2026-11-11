import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPantalla}>Formación Académica</Text>
      
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa"
        anio={2020}
        enCurso={false}
      />
      
      <TarjetaEstudio
        titulo="Técnico"
        institucion="Colegio ABC"
        anio={2022}
        enCurso={false}
      />
      
      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2026}
        enCurso={true}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPantalla: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});