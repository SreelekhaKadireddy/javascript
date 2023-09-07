let employees =[{id:101,name:'Rahul',salary:45000},
{id:102,name:'Sonia',salary:55000}]

let create_Emplyee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_flag  = true 
            db_flag ?  resolve('Data Inserted!'):reject('failed')
            employees.push(emp)
        },4000)
    })
}

let get_Employees=()=>{
    setTimeout(()=>{
        let rows=""
        employees.forEach((employee)=>{
            rows = rows+`<tr>
                         <td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.salary}</td>
                         </tr>`
        })

    document.getElementById('t_data').innerHTML =rows
    },1000)
}

let dummyFun = async ()=>{
await create_Emplyee({id:103,name:"Priya",salary:65000})
get_Employees()
}
dummyFun()