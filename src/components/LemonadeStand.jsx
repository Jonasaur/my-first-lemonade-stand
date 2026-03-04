export default function LemonadeStand({ children }) {
    return (
        <div className="lemonadeStand">
            <div className="standContent">
                {children}
            </div>
        </div>
    );
}