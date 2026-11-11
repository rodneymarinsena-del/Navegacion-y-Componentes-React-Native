import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPantalla}>Experiencia Laboral y Proyectos</Text>
      
      <View style={estilos.tarjeta}>
        <Text style={estilos.titulo}>Desarrollador Frontend Junior (Proyecto SENA)</Text>
        <Text style={estilos.subtitulo}>SENA - ENI Training Management</Text>
        <Text style={estilos.anio}>2025 - Presente</Text>
        <Text style={estilos.descripcion}>
          Estructuración de Product Backlog bajo Scrum, desarrollo de interfaces con React y React Native, gestión de estados y consumo de APIs.
        </Text>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.titulo}>Desarrollador de Pruebas de Software</Text>
        <Text style={estilos.subtitulo}>Talleres Técnicos ADSO</Text>
        <Text style={estilos.anio}>2026</Text>
        <Text style={estilos.descripcion}>
          Implementación de pruebas unitarias y de integración utilizando Jest, Mock Service Worker (MSW), Postman y pruebas de carga con Locust.
        </Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPantalla: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    elevation: 1,
  },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitulo: { fontSize: 14, color: "#475569", marginTop: 2 },
  anio: { fontSize: 12, color: "#64748b", marginVertical: 4 },
  descripcion: { fontSize: 13, color: "#475569", lineHeight: 18 },
});