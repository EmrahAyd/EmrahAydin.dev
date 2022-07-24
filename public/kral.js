/////////////// TODAY//////////////////////////
var today = new Date();


function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

console.log(formatDate(today));

//////////////////////TODAY//////////////////////////

let liste = document.querySelector('#liste')
let tarih = ""
let nameof =[]
let para = []
let s;
let nameofon = []
let paraon= []
let tarr = formatDate(today)

let tarrr = document.querySelector('#tarih')
tarrr.setAttribute("value",tarr)
//////////////tarihi value////////////////

fetch("https://modayakamoz.com/admin/get_bayi_satis.php?tarih=" + formatDate(today)).then
(
    response=>{
    return response.json();
            }
 )
 .then(responsej => {

    responsej.sort(function(a, b){
        return a.toplamSatis - b.toplamSatis;
    })


    responsej.forEach(element => {
      nameof.push(element.komisyoncu_adi)
      s = element.toplamSatis.match(/(\w+)-/g);
      para.push(parseInt(s[0]))


      /////on tane///////

      for(var i = 0; i <= 29; i++) {
        nameofon[i] = nameof [i]
        paraon[i] = para [i]
  
    }
      


        let ekle = document.createElement("li");
        let id = document.createElement("li")
        id.innerHTML = element.id;
        ekle.innerHTML = "<span style=\"color:green\">" + element.komisyoncu_adi + "</span>"+ " " +"<span style=\"color:red\">" + element.toplamSatis + "</span>"  + " " + "<span style=\"color:green\">" + element.hakedis + "</span>";
        liste.append(ekle)
    });
 })




function refresh(){
    liste.innerHTML =""
    
    let tarih = document.querySelector('#tarih').value  


    fetch("https://modayakamoz.com/admin/get_bayi_satis.php?tarih="+ tarih).then
    (
        response=>{
        return response.json();
                }
     )
     .then(responsej => {
    
        responsej.sort(function(a, b){
            return a.toplamSatis - b.toplamSatis;
        })
    
    
    
        responsej.forEach(element => {
            let ekle = document.createElement("li");
            let id = document.createElement("li")
            id.innerHTML = element.id[1];
            ekle.innerHTML = "<span style=\"color:green\">" + element.komisyoncu_adi + "</span>"+ " " +"<span style=\"color:red\">" + element.toplamSatis + "</span>"  + " " + "<span style=\"color:green\">" + element.hakedis + "</span>";
            liste.append(ekle)
        });
     })





     

    }

    let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameofon,
        datasets: [{
            label: 'Bayiler',
            data: paraon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

fetch("https://modayakamoz.com/admin/get_bayi_satis.php?tarih="+ formatDate(today)).then
(
    response=>{
    return response.json();
            }
 )
 .then(responsej => {

    responsej.sort(function(a, b){
        return a.hazir - b.hazir;
    })


    responsej.forEach(element => {
      nameof.push(element.komisyoncu_adi)
      s = element.toplamSatis.match(/(\w+)-/g);
      para.push(parseInt(s[0]))


      /////on tane///////

      for(var i = 0; i <= 29; i++) {
        nameofon[i] = nameof [i]
        paraon[i] = para [i]
  
    }
      


        let ekle = document.createElement("li");
        let id = document.createElement("li")
        id.innerHTML = element.id;
        ekle.innerHTML = "<span style=\"color:green\">" + element.komisyoncu_adi + "</span>"+ " " +"<span style=\"color:red\">" + element.toplamSatis + "</span>"  + " " + "<span style=\"color:green\">" + element.hakedis + "</span>";
        liste.append(ekle)
    });
 })
