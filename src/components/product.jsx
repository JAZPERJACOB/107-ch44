import "./product.css";
import QuantityPicker from "./quantityPicker";
function Product(){

    return (
        <div className="product">

            <img src={"/img/ferrari.jpg"+props.data.images} alt=""></img>
            <h5>{props.data.title}</h5>
            <QuantityPicker></QuantityPicker>
            
        </div>
    );
}

export default Product;