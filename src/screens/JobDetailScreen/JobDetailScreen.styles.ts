import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff", marginBottom: 32 },
  contentContainer: { padding: 16 },
  headerImage: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 4 },
  company: { fontSize: 16, color: "#333", marginBottom: 12 },
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
  section: { marginBottom: 16 },
  sectionTitle: { fontWeight: "bold", fontSize: 15, marginBottom: 4 },
  sectionText: { fontSize: 14, color: "#333" },
  sectionSubText: { fontSize: 12, color: "#888" },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 4,
  },
  rejectButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#eee",
  },
  acceptButton: { backgroundColor: "#222" },
  buttonText: { fontWeight: "bold", color: "#fff", fontSize: 16 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default styles;
