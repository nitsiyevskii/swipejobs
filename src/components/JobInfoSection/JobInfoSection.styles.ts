import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  infoBox: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0f2f1",
    borderRadius: 8,
    marginHorizontal: 4,
    padding: 12,
  },
  infoLabel: { fontSize: 12, color: "#00796b" },
  infoValue: { fontSize: 18, fontWeight: "bold", color: "#00796b" },
});

export default styles;
