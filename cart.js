var productsApi = 'http://localhost:3000/products'
/*ADD to BAG*/ 
function addtobag(id) {
     getProducts(function (products,id=idproduct){
         
         addProduct(products,id=idproduct);
     });
    let idproduct = id;
     alert('Đã thêm sản phẩm vào giỏ hàng');
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
var checkoutProduct = false;
function addProduct(products,id) {
    // console.log(id);
    var itemProduct = products.filter(function (product) {
       return product.id === id;
    });  
    for (var i=0 ; i < cartProducts.length; i++) {
        console.log(cartProducts[i][0].id);
        if(cartProducts[i][0].id == id) {
            cartProducts[i][0].count+=1;
            checkoutProduct = true;
        }
    }
    //    console.log(itemProduct[0].id);
    //    console.log(id);
    //    console.log(checkoutProduct);
    if(checkoutProduct === false) {
        itemProduct[0].count= 1;
        cartProducts.push(itemProduct);  
    }
    checkoutProduct = false;
    // console.log(itemProduct);
    // console.log(cartProducts);
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
      <button class="action-product" onclick="deleteProduct(${cartProduct[0].id})" >
      <i class="far fa-trash-alt"></i>
      </button>
      </td>
    </tr>
</table>
       `;
   });
   listProductsBlock.innerHTML = htmls.join('');
}




function deleteProduct(id) {
    for (var i=0 ; i < cartProducts.length; i++) {
        // console.log(cartProducts[i][0].id);
        if(cartProducts[i][0].id == id) {
            cartProducts[i][0].count=0;
            // console.log(cartProducts[i]);
            cartProducts = cartProducts.filter(item => item !==cartProducts[i] );
            // console.log(cartProducts);
        }
    }
    renderListProducts();
    if(cartProducts.length===0){
        var listProductsBlock = 
    document.querySelector('.header__cart-list');
    listProductsBlock.innerHTML ='<img class="no--cart__img" src="./Front-end/asset/img/empty-cart.png" width="50%" height="50%"alt="">'
    }
    
    alert('Đã xóa 1 sản phẩm');
}
