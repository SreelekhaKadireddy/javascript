let employees=[
    {id:101,name:"Rahul", salary:45000},
    {id:102,name:"Sonia", salary:55000},
    {id:103,name:"Priyanka", salary:65000},
    {id:104,name:"Modi", salary:165000}

]
function display_Employees(){
    //iterate array and construct table rows
    let rows=""
    let i=0
    while(i<=employees.length-1){
        rows = rows+`<tr>
                        <td>${employees[i].id}</td>
                        <td>${employees[i].name}</td>
                        <td>${employees[i].salary}</td>
                     </tr>`
        i++
    }
    document.getElementById('tdata').innerHTML=rows
}