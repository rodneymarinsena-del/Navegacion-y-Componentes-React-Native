// src/app/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2563eb" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación Académica",
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia Laboral",
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Intereses y Hobbies",
        }}
      />
    </Tabs>
  );
}