document.querySelectorAll('.button-group').forEach(Buttons=>{
  let cartButton=Buttons.querySelector('.cart-button');
  let element=cartButton.querySelector('.cart-size');
  let button=element.querySelectorAll('.add-to-cart');
  let numItem=element.querySelector('.number-of-items');
  button.forEach(b=>{
    b.addEventListener('click',()=>{
      let cartList=document.querySelector('.cart-count');
      if(b.classList.contains('minus-cart') && Number(numItem.innerHTML)>0 ){
        cartList.innerHTML=Number(cartList.innerHTML)-1;
        numItem.innerHTML=Number(numItem.innerHTML)-1;
      }
      else if(b.classList.contains('plus-cart')){
        cartList.innerHTML=Number(cartList.innerHTML)+1;
        numItem.innerHTML=Number(numItem.innerHTML)+1;
      }
      
      if(Number(numItem.innerHTML)>0){
        if(!cartButton.querySelector('.item-count')){
          cartButton.insertAdjacentHTML('beforeend',`<div class="item-count">${Number(numItem.innerHTML)}</div>`);
        }
        else{
          cartButton.querySelector('.item-count').innerHTML=Number(numItem.innerHTML);
        }
      }
      else if(cartButton.querySelector('.item-count')){
        cartButton.querySelector('.item-count').remove();
      }
    });
  });
});


document.querySelectorAll('.js-like-button').forEach(button =>{
  button.addEventListener('click',()=>{
    let liked = document.querySelector('.like-count');
    if(button.classList.contains('like-list')){
      liked.innerHTML=Number(liked.innerHTML)-1;
      button.classList.remove('like-list');
      button.innerHTML='<svg clip-rule="evenodd" fill-rule="evenodd" fill="hotpink" height="17" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
    }else{
      liked.innerHTML=Number(liked.innerHTML)+1;
      button.classList.add('like-list');
      button.innerHTML=
      '<svg clip-rule="evenodd" class="liked-pic" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="rgb(181, 20, 87)" height="17"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>';
    }
  });
});

document.querySelectorAll('.item').forEach(item=>{
  let img=item.querySelector('.pastries').outerHTML;
  let name=item.querySelector('.item-name').textContent;
  let price=item.querySelector('.price').textContent;
  let likeButton=item.querySelector('.js-like-button').outerHTML;
  let cartButton=item.querySelector('.cart-button').outerHTML;
  let eyeButton=item.querySelector('.eye-button');
  eyeButton.addEventListener('click', () => {
    let popup = document.createElement('div');
    popup.classList.add('item-detail');
    popup.innerHTML = `
        <div class="popup-content">
          <div class="close-popup">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
            </svg>
          </div>
          <div class="popup-grid" style="position:relative;">
            ${img}
            ${likeButton}
            <div class="details">
                <div class="name">${name}</div>
                <p class="price">${price}</p>
                <div class="description">
                <p>INGREDIENTS</p>
                <div>description</div>
                <div>Availability:</div>
                <div>Categories:</div>
                </div>
            </div>
          </div>
        </div>
    `;
    document.querySelector('.item-grid').appendChild(popup); 
    document.querySelector('.close-popup').addEventListener('click', () => {
    popup.remove();
  });
  });
    
});
