// Category Model

export class Category {
    constructor(id, name, image, subcategoryList = []) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._subcategoryList = subcategoryList;
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

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    get subcategoryList() {
        return this._subcategoryList;
    }

    set subcategoryList(subcategoryList) {
        this._subcategoryList = subcategoryList;
    }

    addSubCategory(subcategory) {
        this._subcategoryList.push(subcategory);
    }

    removeSubCategory(subcategory) {
        this._subcategoryList = this._subcategoryList.filter((subcat) => subcat !== subcategory);
    }
}