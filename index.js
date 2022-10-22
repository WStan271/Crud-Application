var apiURL = "https://crudcrud.com/api/98d3c3ce2e0c4894a0cdaa982388caa4"
//use new crudcrud url if it doesnt work


var createInput = document.getElementById("createInput")
var createInput2 = document.getElementById("createInput2")
var createButton = document.getElementById("createButton")


var readButton =document.getElementById("readButton")

var updateId = document.getElementById("updateId")
var updateInput = document.getElementById("updateInput")
var updateInput2 = document.getElementById("updateInput2")
var updateButton = document.getElementById("updateButton")

var deleteInput = document.getElementById("deleteInput")
var deleteButton = document.getElementById("deleteButton")
var displayData = document.getElementById("displayData")

createButton.addEventListener("click",function(){createRequest(createInput.value,createInput2.value), document.getElementById('createInput').value = '',document.getElementById('createInput2').value = ''})
readButton.addEventListener("click",() =>readRequest().then((data) => {

    console.log(data);
    displayData.innerHTML = ""
  
    for (var i = 0; i < data.length; i++){
      var firstName = data[i].FirstName
      var lastName = data[i].LastName
      var recordId = data[i]._id
      var p = document.createElement('p')
      p.innerHTML = recordId + ", " + firstName + ", " + lastName
      displayData.appendChild(p)
    }
  }))

updateButton.addEventListener("click",function(){updateRequest(updateId.value,updateInput.value,updateInput2.value),document.getElementById('updateId').value = '',document.getElementById('updateInput').value = '',document.getElementById('updateInput2').value = ''})

deleteButton.addEventListener("click",function(){deleteRequest(deleteInput.value),document.getElementById('deleteInput').value = ''})

async function createRequest(createArg1,createArg2) {
    await $.ajax({
      url: apiURL + "/Records",
      dataType: "json",
      data: JSON.stringify({FirstName: createArg1,LastName: createArg2}),
      contentType: "application/json",
      type: "POST",
    });
  }

async function readRequest(){
    var result = await $.ajax({
        url: apiURL +"/Records",
        dataType: "json",  
        contentType: "application/json",
        type: "GET",
    });
    return result;
}
async function updateRequest(currentId,updateFName,updateLName){
    await $.ajax({
        url: apiURL + "/Records/"+ currentId,
        dataType: "json",
        data: JSON.stringify({FirstName: updateFName,LastName: updateLName}),
        contentType: "application/json",
        type: "PUT",
      })

}

async function deleteRequest(deleteArg) {
    console.log("ID:"+deleteArg +" has been deleted")
    await $.ajax({
      url: apiURL + "/Records/" + deleteArg,
      type: "DELETE",
    })
    
  }



