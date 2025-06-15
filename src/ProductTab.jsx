import Product from "./Product.jsx";

export default function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={styles}>
            <Product title="boAt Airdopes 163 Earbuds" idx={0} />

            <Product title="Noise Airwave Max 5 Headphones" idx={1} />

            <Product title="Redmi Smart Watch 5 Active " idx={2} />

            <Product title="Anker Nano 30 W Power Bank" idx={3} />

        </div>
    )
}

