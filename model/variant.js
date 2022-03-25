import { Product } from "./product.js";

// Variant Model
export class Variant extends Product{
    constructor(id, name, type, ref, image, price, init_price = 0) {
        super(id, name, type, image, price, init_price);
        this._ref = ref;
    }
    get ref() {
        return this._ref;
    }

    set ref(ref) {
        this._ref = ref;
    }
}