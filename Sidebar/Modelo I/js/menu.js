let menuItem = document.querySelectorAll('.menu-item');

function LinkSelected() {
  menuItem.forEach((item) => 
    item.classList.remove('ativo')
  )
  this.classList.add('ativo');
}

menuItem.forEach((item) => 
  item.addEventListener('click', LinkSelected)
)

// Expandir menu

let btnExpand = document.querySelector('#btn-exp');
let menuSidebar = document.querySelector('.sidebar');

btnExpand.addEventListener('click', function(){
  menuSidebar.classList.toggle('expand')
  console.log('certp')
})