let cart=[];let category='All';
function addToCart(name,price){cart.push({name,price});document.getElementById('count').textContent=cart.length;renderCart();}
function renderCart(){document.getElementById('cartItems').innerHTML=cart.map(x=>`<div class="cart-line"><b>${x.name}</b><br>${x.price}</div>`).join('')||'<p>Your cart is empty.</p>';document.getElementById('cartTotal').textContent=cart.length;}
function openCart(){document.getElementById('cartPanel').classList.add('open');renderCart()}
function closeCart(){document.getElementById('cartPanel').classList.remove('open')}
function setCat(c){category=c;filterProducts()}
function filterProducts(){let q=document.getElementById('search').value.toLowerCase();document.querySelectorAll('.product').forEach(p=>{let ok=(category==='All'||p.dataset.cat===category)&&p.innerText.toLowerCase().includes(q);p.style.display=ok?'block':'none'})}