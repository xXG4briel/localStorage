const table = document.querySelector("#table")
let local_json = JSON.parse(localStorage.getItem("table"))

function add_json() {
    document.querySelector("#add").addEventListener("click", 
    function (){
        if (document.querySelector("#name") != 0 || document.querySelector("#age") != 0 || document.querySelector("#sex") != 0 || document.querySelector("#song") != 0) {
            alert("Digite algo")
        }
        else{
            let json = JSON.stringify({
                name: document.querySelector("#name").value,
                age: document.querySelector("#age").value,
                sex: document.querySelector("#sex").value,
                song : document.querySelector("#song").value
            })
            if(localStorage.length == 0){
                localStorage.setItem("table", json)
            }
            else{
                let get_last_data = String(localStorage.getItem('table')).replace("[","").replace("]","")
                get_last_data = `[${get_last_data}, ${json}]` 
                localStorage.setItem('table', get_last_data)
            }
            let row = document.createElement("tr")
            let column1 = document.createElement("th")
            let column2 = document.createElement("th")
            let column3 = document.createElement("th")
            let column4 = document.createElement("th")
            
            column1.innerHTML = JSON.parse(json).name
            column2.innerHTML = JSON.parse(json).age
            column3.innerHTML = JSON.parse(json).sex
            column4.innerHTML = JSON.parse(json).song

            append(row, column1, column2, column3, column4)

            document.querySelector("#name").value = ''
            document.querySelector("#age").value = ''
            document.querySelector("#sex").value = ''
            document.querySelector("#song").value = ''
        }
    }
    ,false)
}
function append(row, col1,col2,col3,col4) {
    table.appendChild(row)
    table.appendChild(col1)
    table.appendChild(col2)
    table.appendChild(col3)
    table.appendChild(col4)
}

function criar_tabelas(){
    if (local_json) {
        for(let k = 0 ; k < local_json.length ; k++){
            let row = document.createElement("tr")
            let column1 = document.createElement("th")
            let column2 = document.createElement("th")
            let column3 = document.createElement("th")
            let column4 = document.createElement("th")
        
            console.log(column1.innerHTML = local_json[k].name)
            console.log(column2.innerHTML = local_json[k].age)
            console.log(column3.innerHTML = local_json[k].sex)
            console.log(column4.innerHTML = local_json[k].song)
    
            append(row, column1, column2, column3, column4) // função para addd
        }
    }
}

function remove(){
    if(local_json != null){
        localStorage.removeItem("table")
    }
    else{
        alert("Sem Dados salvos!")
    }
}
window.addEventListener("load", criar_tabelas, false)
window.addEventListener("load", add_json, false)