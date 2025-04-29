import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  jobImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  title: { fontWeight: "bold", fontSize: 18 },
  company: { fontSize: 16, color: "#333" },
  location: { fontSize: 14, color: "#666" },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  miles: { fontSize: 14, color: "#00796b" },
  rate: { fontSize: 14, color: "#388e3c", fontWeight: "bold" },
  requirements: { flexDirection: "row", marginTop: 8 },
  requirementsLabel: { fontWeight: "bold", marginRight: 4 },
  requirementsValue: { color: "#333" },
  container: { flex: 1 },
});

export default styles;
