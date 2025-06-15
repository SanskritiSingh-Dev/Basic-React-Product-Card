import "./Product.css"
import Price from './Price.jsx';

export default function Product({ title, idx }) {
    let oldPrices = ["₹1,299", "₹6,499", "₹2,499", "₹3,799"];
    let newPrices = ["₹899", "₹4,999", "₹1,868", "₹3,299"];
    let description = [
        ["Budget earbuds with rich audio.", "All-day comfortable listening."],
        ["Comfy headphones with deep bass.", "Pure musical relaxation."],
        ["Fitness watch with health tracking.", "Your motivational buddy!"],
        ["Fast-charging and durable power bank.", "Reliable backup on the move."]
    ];
    return (
        <div className="Product" >
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            < Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

