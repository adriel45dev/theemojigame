import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import emoticon from "./assets/svg/emoticon.png";
import clown from "./assets/svg/clown.png";
import monocle from "./assets/svg/monocle.png";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#6898d4");

  useEffect(() => {
    if (count % 10 == 0) {
      setBgColor(getRandomColor());
    }
  }, [count]);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Image
        source={count % 10 == 0 ? clown : monocle}
        style={[styles.image]}
      />

      <Text style={styles.title}>The Emoji Game</Text>
      <Text style={styles.title}>⚡📚🔮🔍🚂🚪🦉🍭🍫🐍🧙‍♂️🏰🔥</Text>

      <Pressable style={styles.button} onPress={() => setCount((c) => c + 1)}>
        <Text style={styles.text}>{String(count)}</Text>
      </Pressable>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  image: {
    width: 80,
    height: 80,
  },

  title: {
    fontSize: 36,
    color: "#fff",
    shadowColor: "#333",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "black",
    width: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
