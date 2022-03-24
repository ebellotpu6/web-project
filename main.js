// Category Model
class Category {
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

let categoryList = [
    new Category(1, "Infantiles", "./src/images/categories/infantiles.jpeg", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),
    new Category(2, "Patchwork", "./src/images/categories/patchwork.jpeg", [22,23,3,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),
    new Category(3, "Básicos", "./src/images/categories/basicos.jpeg", [42,43,44,11,30,45,13,46,47,22,48,49,50,18,12,51,52,53,54,55,56]),
    new Category(4, "Carnaval", "./src/images/categories/carnaval.jpeg", [57,58,59,60,61,62,63,64,65,66,67,68,55,69,70,71,72]),
    new Category(5, "Moda", "./src/images/categories/moda.jpeg", [6,73,74,75,10,76,19,77,78,79,80,45,81,82,83,84,85,86]),
    new Category(6, "Hogar", "./src/images/categories/hogar.jpeg", [87,88,89,90,91,92,93,94,95,56,96,97,98,99,100,53,101,102,103,104]),
    new Category(7, "Complementos", "./src/images/categories/complementos.jpeg", [105,106,107,108,109,110,111,112,113,114,115]),
    new Category(8, "Ofertas", "./src/images/categories/ofertas.jpeg", [116,117,118])
];

let subCategoryList = [
    new Category(1, "Disney", "./src/images/categories/infantiles.jpeg"),
    new Category(2,"Infantil", "./src/images/categories/infantiles.jpeg"),
    new Category(3,"Chromatics", "./src/images/categories/infantiles.jpeg"),
    new Category(4,"Algodones digitales", "./src/images/categories/infantiles.jpeg"),
    new Category(5,"Waffle", "./src/images/categories/infantiles.jpeg"),
    new Category(6, "Punto Waffle", "./src/images/categories/infantiles.jpeg"),
    new Category(7, "Franela", "./src/images/categories/infantiles.jpeg"),
    new Category(8, "Coralina Estampada", "./src/images/categories/infantiles.jpeg"),
    new Category(9, "Softshell", "./src/images/categories/infantiles.jpeg"),
    new Category(10, "Tela de puño", "./src/images/categories/infantiles.jpeg"),
    new Category(11, "Piqué", "./src/images/categories/infantiles.jpeg"),
    new Category(12, "Sudadera de invierno", "./src/images/categories/infantiles.jpeg"),
    new Category(13, "Sudadera sin perchar", "./src/images/categories/infantiles.jpeg"),
    new Category(14, "Cuadros y rayas", "./src/images/categories/infantiles.jpeg"),
    new Category(15, "Plumetti de algodón", "./src/images/categories/infantiles.jpeg"),
    new Category(16, "Half Panama infantil", "./src/images/categories/infantiles.jpeg"),
    new Category(17, "Pul", "./src/images/categories/infantiles.jpeg"),
    new Category(18, "Minky", "./src/images/categories/infantiles.jpeg"),
    new Category(19, "Pana", "./src/images/categories/infantiles.jpeg"),
    new Category(20, "Punto Canalé", "./src/images/categories/infantiles.jpeg"),
    new Category(21, "Acolchado dos caras", "./src/images/categories/infantiles.jpeg"),

    new Category(22, "Cretona Lisa", "./src/images/categories/patchwork.jpeg"),
    new Category(23, "Cretona estampada", "./src/images/categories/patchwork.jpeg"),
    new Category(24, "Lorraine", "./src/images/categories/patchwork.jpeg"),
    new Category(25, "Artcraft", "./src/images/categories/patchwork.jpeg"),
    new Category(26, "Entretelas y guatas", "./src/images/categories/patchwork.jpeg"),
    new Category(27, "Marmoleados", "./src/images/categories/patchwork.jpeg"),
    new Category(28, "Liberty", "./src/images/categories/patchwork.jpeg"),
    new Category(29, "Classic Patch", "./src/images/categories/patchwork.jpeg"),
    new Category(30, "Tela de Vichy", "./src/images/categories/patchwork.jpeg"),
    new Category(31, "Le Quilt", "./src/images/categories/patchwork.jpeg"),
    new Category(32, "Spring Peacock", "./src/images/categories/patchwork.jpeg"),
    new Category(33, "Básicos", "./src/images/categories/patchwork.jpeg"),
    new Category(34, "Batik", "./src/images/categories/patchwork.jpeg"),
    new Category(35, "The red and black", "./src/images/categories/patchwork.jpeg"),
    new Category(36, "Vintage 1800's", "./src/images/categories/patchwork.jpeg"),
    new Category(37, "Country Floral", "./src/images/categories/patchwork.jpeg"),
    new Category(38, "Illuminations", "./src/images/categories/patchwork.jpeg"),
    new Category(39, "Paisley", "./src/images/categories/patchwork.jpeg"),
    new Category(40, "Patrik", "./src/images/categories/patchwork.jpeg"),
    new Category(41, "Country", "./src/images/categories/patchwork.jpeg"),
    
    new Category(42, "Tela impermeable", "./src/images/categories/basicos.jpeg"),
    new Category(43, "Viprotect", "./src/images/categories/basicos.jpeg"),
    new Category(44, "Toalla de Bambú", "./src/images/categories/basicos.jpeg"),
    new Category(45, "Tela tejana", "./src/images/categories/basicos.jpeg"),
    new Category(46, "Punto liso", "./src/images/categories/basicos.jpeg"),
    new Category(47, "Tela de toalla", "./src/images/categories/basicos.jpeg"),
    new Category(48, "Borreguito", "./src/images/categories/basicos.jpeg"),
    new Category(49, "Velour", "./src/images/categories/basicos.jpeg"),
    new Category(50, "Coralina", "./src/images/categories/basicos.jpeg"),
    new Category(51, "Punto acolchado", "./src/images/categories/basicos.jpeg"),
    new Category(52, "Stretch", "./src/images/categories/basicos.jpeg"),
    new Category(53, "Terciopelo", "./src/images/categories/basicos.jpeg"),
    new Category(54, "Escocés", "./src/images/categories/basicos.jpeg"),
    new Category(55, "Arpillera", "./src/images/categories/basicos.jpeg"),
    new Category(56, "Polipiel", "./src/images/categories/basicos.jpeg"),

    new Category(57, "Estampados de Carnaval", "./src/images/categories/carnaval.jpeg"),
    new Category(58, "Tul", "./src/images/categories/carnaval.jpeg"),
    new Category(59, "Lycra", "./src/images/categories/carnaval.jpeg"),
    new Category(60, "Pelo de Animales", "./src/images/categories/carnaval.jpeg"),
    new Category(61, "Lámina 112cm", "./src/images/categories/carnaval.jpeg"),
    new Category(62, "Rasete", "./src/images/categories/carnaval.jpeg"),
    new Category(63, "Charol", "./src/images/categories/carnaval.jpeg"),
    new Category(64, "Lentejuela redonda", "./src/images/categories/carnaval.jpeg"),
    new Category(65, "Lentejuela cuadrada holograma", "./src/images/categories/carnaval.jpeg"),
    new Category(66, "Martelé", "./src/images/categories/carnaval.jpeg"),
    new Category(67, "Pelo", "./src/images/categories/carnaval.jpeg"),
    new Category(68, "Fieltro", "./src/images/categories/carnaval.jpeg"),
    new Category(69, "Tela de raso", "./src/images/categories/carnaval.jpeg"),
    new Category(70, "Lámina metálica", "./src/images/categories/carnaval.jpeg"),
    new Category(71, "Foamizado de rasete", "./src/images/categories/carnaval.jpeg"),
    new Category(72, "Fantasias de Carnaval", "./src/images/categories/carnaval.jpeg"),
    
    new Category(73, "Tela de lino liso", "./src/images/categories/moda.jpeg"),
    new Category(74, "Muselinas", "./src/images/categories/moda.jpeg"),
    new Category(75, "Muselinas de Bambú", "./src/images/categories/moda.jpeg"),
    new Category(76, "Estampados", "./src/images/categories/moda.jpeg"),
    new Category(77, "Punto Jacquard", "./src/images/categories/moda.jpeg"),
    new Category(78, "Tecno Silk", "./src/images/categories/moda.jpeg"),
    new Category(79, "Gasa de poliéster", "./src/images/categories/moda.jpeg"),
    new Category(80, "Koshivo crepe lunares", "./src/images/categories/moda.jpeg"),
    new Category(81, "Crep Satén", "./src/images/categories/moda.jpeg"),
    new Category(82, "Punto roma liso", "./src/images/categories/moda.jpeg"),
    new Category(83, "Plana Bielástica", "./src/images/categories/moda.jpeg"),
    new Category(84, "Fantasias", "./src/images/categories/moda.jpeg"),
    new Category(85, "Tela de paño", "./src/images/categories/moda.jpeg"),
    new Category(86, "Escocés", "./src/images/categories/moda.jpeg"),

    new Category(87, "Canvas liso", "./src/images/categories/hogar.jpeg"),
    new Category(88, "Dralón Teflón", "./src/images/categories/hogar.jpeg"),
    new Category(89, "Canvas Brends", "./src/images/categories/hogar.jpeg"),
    new Category(90, "Loneta lisa", "./src/images/categories/hogar.jpeg"),
    new Category(91, "Loneta estampada", "./src/images/categories/hogar.jpeg"),
    new Category(92, "Half Panama", "./src/images/categories/hogar.jpeg"),
    new Category(93, "Mantelerías", "./src/images/categories/hogar.jpeg"),
    new Category(94, "Telas de Lino", "./src/images/categories/hogar.jpeg"),
    new Category(95, "Chenilla", "./src/images/categories/hogar.jpeg"),
    new Category(96, "Alcantara", "./src/images/categories/hogar.jpeg"),
    new Category(97, "Antelina", "./src/images/categories/hogar.jpeg"),
    new Category(98, "FUR", "./src/images/categories/hogar.jpeg"),
    new Category(99, "Gobelinos", "./src/images/categories/hogar.jpeg"),
    new Category(100, "Visillo", "./src/images/categories/hogar.jpeg"),
    new Category(101, "Panama de algodón", "./src/images/categories/hogar.jpeg"),
    new Category(102, "Mantelerías de Navidad", "./src/images/categories/hogar.jpeg"),
    new Category(103, "Stripe Fabrics", "./src/images/categories/hogar.jpeg"),
    new Category(104, "Jacquard", "./src/images/categories/hogar.jpeg"),
    
    new Category(105, "Plástico alimentario EVA", "./src/images/categories/complementos.jpeg"),
    new Category(106, "Tela de puño", "./src/images/categories/complementos.jpeg"),
    new Category(107, "TNT tela sin tejer", "./src/images/categories/complementos.jpeg"),
    new Category(108, "Guata", "./src/images/categories/complementos.jpeg"),
    new Category(109, "Mallas", "./src/images/categories/complementos.jpeg"),
    new Category(110, "Mallas 3D", "./src/images/categories/complementos.jpeg"),
    new Category(111, "Toldo de sobra", "./src/images/categories/complementos.jpeg"),
    new Category(112, "Aislante térmico", "./src/images/categories/complementos.jpeg"),
    new Category(113, "Rejilla semirígida", "./src/images/categories/complementos.jpeg"),
    new Category(114, "Estabilizador aislante térmico", "./src/images/categories/complementos.jpeg"),
    new Category(115, "Glasilla", "./src/images/categories/complementos.jpeg"),

    new Category(116, "Ofertas de algodón", "./src/images/categories/ofertas.jpeg"),
    new Category(117, "Ofertas de moda", "./src/images/categories/ofertas.jpeg"),
    new Category(118, "Ofertas de hogar", "./src/images/categories/ofertas.jpeg")
];

// View

const navbar_category_menu = document.getElementById("navbar_category_list");
const navbar_categoryOverlayConatainer = document.getElementById("navbar_categoryOverlayConatainer");
const navbar_subcategory_menu = document.getElementById("navbar_subcategory_list");
const sideBarMenu = document.getElementById("navbar_sidePanel_container");
const navbar_button = document.getElementById("navbar_button");
const close_navbar_button = document.getElementById("close_navbar_button");
const navbar_sidePanel_category_menu = document.getElementById("navbar_sidePanelCategoryMenu_list");

const renderNavbarMenuCategory = (category) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.textContent = category.name;
    a.classList.add("navbar-link");

    li.append(a);
    li.classList.add("navbar-categoryLink");
    li.addEventListener("mouseover", function( event ) {
        showSubmenu(category.id);
      }, false);
    return li;
}

const renderNavbarSubCategory = (subcategory) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.textContent = subcategory.name;
    a.classList.add("navbar-link");

    li.append(a);
    return li;
}

const renderNavbarSidePanelMenuCategory = (category) => {
    const li = document.createElement("li");

    const a = document.createElement("a");

    const divImage = document.createElement("div");
    const div = document.createElement("div");
    div.style = `background-image: url(${category.image});`;
    divImage.append(div);
    divImage.classList.add("navbar_sidePanelCategoryMenu_linkImage");

    const divText = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = category.name;
    divText.append(span);
    divText.classList.add("navbar_sidePanelCategoryMenu_linkText");

    a.append(divImage, divText);

    li.append(a);
    li.classList.add("navbar_sidePanelCategoryMenu_element");
    return li;
}

//Handler submenu (show on mouseover)
function showSubmenu(category_id) {
    navbar_subcategory_menu.textContent = "";
    navbar_categoryOverlayConatainer.classList.add("navbar_categoryOverlayConatainer-open");
    let category = categoryList.find((cat) => cat._id === category_id);
    for(let i = 0; i < category.subcategoryList.length; i++){
        navbar_subcategory_menu.appendChild(renderNavbarSubCategory(subCategoryList[category.subcategoryList[i]-1]));
    }
    navbar_subcategory_menu.style = "display: grid;";
    navbar_subMenuImage.style=`background-image: url(${category._image}`;
}

//Handler submenu (hide on mouseleave)
navbar_category_container.addEventListener("mouseleave", function(){
    navbar_categoryOverlayConatainer.classList.remove("navbar_categoryOverlayConatainer-open");
});

//Show sideBarMenu
navbar_button.addEventListener("click", function(){
    sideBarMenu.style = "transform: translateZ(0);";
});

//Hide sideBarMenu
close_navbar_button.addEventListener("click", function(){
    sideBarMenu.style = "transform: translate3d(-100%, 0, 0);";
});

const render = () => {
    navbar_category_menu.textContent = "";
    navbar_sidePanel_category_menu.textContent = "";
    for (let i = 0; i < categoryList.length; i++) {
        navbar_category_menu.appendChild(renderNavbarMenuCategory(categoryList[i]));
        navbar_sidePanel_category_menu.appendChild(renderNavbarSidePanelMenuCategory(categoryList[i]));
    }
}

render();





/*

const navbar_button = document.getElementById("navbar_button");
const sideBarMenu = document.getElementById("navbar_sidePanel_container");
const close_navbar_button = document.getElementById("close_navbar_button");
const navbar_category_container = document.getElementById("navbar_category_container");
const navbar_subMenu = document.querySelectorAll('.navbar-subMenu');
const navbar_categoryOverlayConatainer = document.getElementById("navbar_categoryOverlayConatainer");
const navbar_subMenuImage = document.getElementById("navbar_subMenuImage");
const footer_accordion = document.querySelectorAll(".footer-section");

const product_carousels = document.querySelectorAll('.product-list');



//Handler submenu (show on mouseover)
function showSubmenu(category) {
    navbar_categoryOverlayConatainer.classList.add("navbar_categoryOverlayConatainer-open");
    for(const element of navbar_subMenu){
        if (element.attributes.reference.value == category){
            element.style = "display: grid;"
            navbar_subMenuImage.style=`background-image: url(./src/images/categories/${category}.jpeg);`
        }
        else element.style = "display: none";
    }
}

//Handler submenu (hide on mouseleave)
navbar_category_container.addEventListener("mouseleave", function(){
    navbar_categoryOverlayConatainer.classList.remove("navbar_categoryOverlayConatainer-open");
});


//Handler product carousel
for (let i = 0; i < product_carousels.length; i++){
    let itemWidth = product_carousels[i].querySelector('.product-listItem').clientWidth;
    product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonLeft").addEventListener('click', function(){
        product_carousels[i].scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
    });
    product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonRight").addEventListener('click', function(){
        product_carousels[i].scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
    });
    product_carousels[i].onscroll = function () {
        let prevProductCarousel = product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonLeft");
        let nextProductCarousel = product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonRight");
        if(product_carousels[i].scrollLeft == 0) prevProductCarousel.classList.add('hide-content');
        else if(prevProductCarousel.classList.contains('hide-content')) prevProductCarousel.classList.remove('hide-content');
        if(product_carousels[i].scrollLeft == (product_carousels[i].scrollWidth - product_carousels[i].offsetWidth)) nextProductCarousel.classList.add('hide-content');
        else if(nextProductCarousel.classList.contains('hide-content')) nextProductCarousel.classList.remove('hide-content');
    }
}

//Handler footer sections
for(let i = 0; i < footer_accordion.length; i++){
    footer_accordion[i].addEventListener("click", function(){
        this.classList.toggle("expanded");
    });
}

*/