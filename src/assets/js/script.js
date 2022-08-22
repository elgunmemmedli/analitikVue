let tabs =  document.querySelectorAll('.nav-link');
let charts =  document.querySelectorAll('.charts');


tabs.forEach((item,index) =>{
    item.addEventListener('click', function (e){
      e.preventDefault();
        tabs.forEach(item=>item.classList.remove('active'));
        charts.forEach(item=>item.classList.remove('show'));
        this.classList.add('active');
        charts[index].classList.add('show');

    })
})


