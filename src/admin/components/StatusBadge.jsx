export default function StatusBadge({ status = "New" }) {
  const styles = {
    New: "bg-green-100 text-green-700",
    Contacted: "bg-yellow-100 text-yellow-700",
    Completed: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[status] || styles.New
      }`}
    >
      {status}
    </span>
  );
}