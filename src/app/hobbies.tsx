import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HobbiesScreen() {
  const hobbies = [
    {
      id: 1,
      titulo: "Desarrollo de Videojuegos y Gaming",
      detalle: "Disfruto jugando títulos como Minecraft, GTA V, Terraria y Fortnite en multiplataforma.",
    },
    {
      id: 2,
      titulo: "Música y Guitarra",
      detalle: "Práctica de guitarra acústica y eléctrica, explorando géneros como rock, vallenato y música folclórica.",
    },
    {
      id: 3,
      titulo: "Programación y Open Source",
      detalle: "Construcción de aplicaciones web y móviles utilizando tecnologías modernas de JavaScript y Python.",
    },
  ];

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPantalla}>Intereses y Pasatiempos</Text>
      <Text style={estilos.instruccion}>Presiona cualquier tarjeta para ver más detalles:</Text>

      {hobbies.map((hobby) => (
        <TouchableOpacity
          key={hobby.id}
          style={estilos.tarjeta}
          onPress={() => Alert.alert(hobby.titulo, hobby.detalle)}
          activeOpacity={0.7}
        >
          <Text style={estilos.titulo}>{hobby.titulo}</Text>
          <Text style={estilos.subtitulo}>Toca para ver detalles...</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPantalla: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 4 },
  instruccion: { fontSize: 13, color: "#64748b", marginBottom: 12 },
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    elevation: 1,
  },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  subtitulo: { fontSize: 12, color: "#2563eb", marginTop: 4 },
});