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


