/*Warna warna
 --green-color : #a8fbd3;
    --mint-color : #4fb7b3;
    --purple-color : #637ab9;
    --navy-color : #31326f;
    

*/


//ambil id dari html
let dashboard = document.getElementById("dashboard");
let pemasukan = document.getElementById("pemasukan");
let pengeluaran = document.getElementById("pengeluaran");
let setting = document.getElementById("setting");

//Berubah warna ketika di klik -dashboard
dashboard.addEventListener('click', function(){
    //bagian ini untuk merubah warna ketika di klik
    dashboard.style.background = '#31326f' ;
    dashboard.style.color = '#637ab9' ;
    //bagian ini kebawah untuk mengembalikan warna semula
    pemasukan.style.background = '#637ab9' ;
    pemasukan.style.color = 'white' ;
  
    pengeluaran.style.background = '#637ab9' ;
    pengeluaran.style.color = 'white' ;
  
    setting.style.background = '#637ab9' ;
    setting.style.color = 'white' ;
  
})

//Berubah warna ketika di klik -pemasukan
pemasukan.addEventListener('click', function(){
    
    dashboard.style.background = '#637ab9' ;
    dashboard.style.color = 'white'
  
    pemasukan.style.background = '#31326f' ;
    pemasukan.style.color = '#637ab9' ;
    
    pengeluaran.style.background = '#637ab9' ;
    pengeluaran.style.color = 'white' ;
  
    setting.style.background = '#637ab9' ;
    setting.style.color = 'white' ;
  
})

//Berubah warna ketika di klik -pengeluaran
pengeluaran.addEventListener('click', function(){
    
    dashboard.style.background = '#637ab9' ;
    dashboard.style.color = 'white'
  
    pemasukan.style.background = '#637ab9' ;
    pemasukan.style.color = 'white' ;
    
    pengeluaran.style.background = '#31326f' ;
    pengeluaran.style.color = '#637ab9' ;
  
    setting.style.background = '#637ab9' ;
    setting.style.color = 'white' ;
  
})

//Berubah warna ketika di klik -setting
setting.addEventListener('click', function(){
    
    dashboard.style.background = '#637ab9' ;
    dashboard.style.color = 'white'
  
    pemasukan.style.background = '#637ab9' ;
    pemasukan.style.color = 'white' ;
    
    pengeluaran.style.background = '#637ab9' ;
    pengeluaran.style.color = 'white' ;
  
    setting.style.background = '#31326f' ;
    setting.style.color = '#637ab9' ;
  
})