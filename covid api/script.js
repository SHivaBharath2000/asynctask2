var div = document.createElement("div")
var col=document.createElement("div")
var but = document.createElement("button")
but.className="btn btn-danger"
but.innerHTML = "click me"

async function getdata() {
   var a = await fetch("https://data.covid19india.org/v4/min/data.min.json")
   var res = await a.json()


   but.addEventListener("click", function () {
      foo(res)
   })

}
getdata()
function foo(h) {
   var s = document.getElementById("input").value
   var n = h.TN.districts[s].total
   var c=h.TN.districts[s].total.confirmed
   var t=h.TN.districts[s].total.recovered
   var d=h.TN.districts[s].total.deceased
   var v=h.TN.districts[s].total.vaccinated1
  
  
        col.className="col-md-4"
        col.innerHTML=` <div class="card">
        <div class="card-header">
        <h5 class="card-title">${s} district status</h5>
        </div>
        <div class="card-body">
          <h6 style="margin bottom:20px"class="card-text">CONFRIMED CASES:  ${c}</h6>
          <h6 class="card-text">TESTED CASES:     ${t}</h6>
          <h6 class="card-text">DECREASED CASES:  ${d}</h6>
          <h6 class="card-text">VACCINATED CASES: ${v}</h6>
          <h6 class="card-text">For more details.</h6>
          <a href="https://covidtracking.in/coronavirus-cases/tamil-nadu" class="btn btn-primary">Click this</a>
        </div>
      </div>`
     
  
    
 }
//  <i class="bi bi-info-circle"></i>

var form = document.createElement("input")
form.id = "input"
var br=document.createElement("br")
var lab=document.createElement("label")
lab.setAttribute("for","input")
lab.innerHTML="Enter the cityname first letter should be capital"
div.append(lab,br,form, but)

document.body.append(div,col)
