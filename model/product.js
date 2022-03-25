// Product Model

export class Product {
    constructor(id, name, type, image, price, init_price) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._image = image;
        this._price = price;
        if (init_price === 0) this._init_price = price;
        else this._init_price = init_price;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    get init_price() {
        return parseFloat(this._init_price).toFixed(2);
    }

    set init_price(init_price) {
        this._init_price = init_price;
    }

    get price() {
        return parseFloat(this._price).toFixed(2);
    }

    set price(price) {
        this._price = price;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    is_onSale() {
        return this._init_price > this._price;
    }
}