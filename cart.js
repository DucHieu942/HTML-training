var productsApi = 'http://localhost:3000/products'

function addtobag(id) {
     getProducts(function (products,id=idproduct){
         
         addProduct(products,id=idproduct);
     });
    let idproduct = id;
     
}
/* function */ 
function getProducts(callback) {
    fetch(productsApi)
     .then(function (response) {
         return response.json();
     })
     .then(callback);
}

var cartProducts = new Array();
var checkoutProduct = false
function addProduct(products,id) {
    console.log(id);
    var itemProduct = products.filter(function (product) {
       return product.id === id;
    });  
    for (var i=0 ; i < cartProducts.length; i++) {
        console.log(cartProducts[i][0].id);
        if(cartProducts[i][0].id == id) {
            cartProducts[i][0].count+=1;
            checkoutProduct = true;
        }
        // else{checkoutProduct = false}
    }
       console.log(itemProduct[0].id);
       console.log(id);
       console.log(checkoutProduct);
    if(checkoutProduct === false) {
        itemProduct[0].count= 1;
        cartProducts.push(itemProduct);  
    }
    checkoutProduct = false;
    console.log(itemProduct);
    console.log(cartProducts);
    renderListProducts();
}
function renderListProducts() {
    var listProductsBlock = 
    document.querySelector('.header__cart-list');
   var htmls = cartProducts.map(function(cartProduct){
       return `
    <table style="width:100%">
    <tr>
    <th>Sản phẩm</th>
    <th>Tên sản Phẩm</th>
    <th>Giá tiền</th>
    <th>Số Lượng</th>
    <th>Xóa</th>
  </tr>
    <tr>
      <td><div class="itemProduct_img">
        <img src="${cartProduct[0].img}" width="30" height="30" alt="">
     </div></td>
      <td><h4 class="itemProduct_name" >${cartProduct[0].name}</h4></td>
      <td><div><span class="=itemProduct_price">${cartProduct[0].price}</span></div></td>
      <td>
      <div class="itemProduct_cout">${cartProduct[0].count}</div>
      </td>
      <td>
      <div class="action-product">
      <i class="far fa-trash-alt"></i>
      </div>
      </td>
    </tr>
</table>
       `;
   });
   listProductsBlock.innerHTML = htmls.join('');
}