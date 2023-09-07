let employees=[
    {id:101,name:"Rahul",salary:45000},
    {id:102,name:"Sonia",salary:55000}
]
let create_Employees=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)

}
let get_Employees=()=>{
    setTimeout(()=>{
        let row=""
        for(emp of employees){
            row=row+`<tr>
                    <td>${emp.id}</td>
                     <td>${emp.name}</td>
                     <td>${emp.salary}</td>
                     </tr>
            `
        }
        document.getElementById('t_body').innerHTML=row
    },1000)
    
}
create_Employees({id:103,name:"Priyanka",salary:65000},get_Employees)