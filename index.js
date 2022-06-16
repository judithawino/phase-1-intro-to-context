// Your code here
//1. using variable declaration to create and store a function
let createEmployeeRecord = function(arr){
    //2. return an object and populate its record from an Array
    return {
        //populates a firstName field from the 0th element
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        //initializing the following keys with an empty array
        timeInEvents:[],
        timeOutEvents:[]
    }
}

//function takes in an array of arrays i.e multidimensional array for instance employeeData=[[],[]]
let createEmployeeRecords= function(employeeData){
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
    return employeeData.map(function(arr){
        return createEmployeeRecord(arr)
    })

}

let createTimeInEvent = function(employeeRecordObject, dateStamp){
    let [date,hour] = dateStamp.split(' ')
    employeeRecordObject.timeInEvents.push({
        type: "TimeIn",
        hour:parseInt(hour,10),
        date,
    })
    return employeeRecordObject

}

let createTimeOutEvent= function(employeeRecordObject,dateStamp){
    let [date,hour] = dateStamp.split(' ')
    employeeRecordObject.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour,10),
        date,
    })
    return employeeRecordObject
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })


     let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}







