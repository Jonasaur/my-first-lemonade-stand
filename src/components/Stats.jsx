export default function Stats({ label, value, ismoney }) {
    return (
        <div className="stat-item">
            <strong>{label}</strong> {ismoney ? `$${value.toFixed(2)}` : value}
        </div>
    );
}