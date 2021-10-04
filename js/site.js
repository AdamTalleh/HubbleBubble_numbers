// get values from the user . we  need to get the hubble and bubble values.

function getValues() {

    //get the user values from the page 

    let hubbleValue = document.getElementById("hubbleValue").value;
    let bubbleValue = document.getElementById("bubbleValue").value;

    //parse for numbers

    hubbleValue = parseInt(hubbleValue);
    bubbleValue = parseInt(bubbleValue);

    //check that are integers

    if (Number.isInteger(hubbleValue)&& Number.isInteger(bubbleValue)) {
        


        //we call hubblebubble 


        let hbArray = hubbleBubble3(hubbleValue, bubbleValue);

        //display data and write values to the screen

        displayData(hbArray);

    
    }    else {
        alert("You Must Insert Integers less than 100 ! ");
    }



}

function hubbleBubble(hubbleValue, bubbleValue) {
    // init the return array

    let returnArray = [];


    //loop from 1 to 100 
    for (let i = 1; i <= 100; i++) {
        //we need to check the current value in three steps 

        // check to see if divisible by both (3 and 5)

        if (i % hubbleValue == 0 && i % bubbleValue == 0) {
            //if so push HubbleBubble into an array and not the number
            returnArray.push('HubbleBubble');
        } else

            //check if divisible by hubble value only 

            if (i % hubbleValue == 0 && i % bubbleValue != 0) {
                // if so push 'Hubble' into array and not the number
                returnArray.push('Hubble');
            }
        else

            //check to if divisible by bubble value (5)

            if (i % bubbleValue == 0 && i % hubbleValue != 0) {
                //if so push 'bubble' into array and not the number
                returnArray.push('Bubble');
            }
        else {

            //if none display the numbers
            returnArray.push(i);
        }

    }


    //at the end return the array 

    return returnArray;


}

function hubbleBubble2(hubbleValue,bubbleValue){
    let returnArray =[];
    let Hubble = false;
    let Bubble = false;

    for (let i = 1; i<=100 ; i++){
        Hubble =i% hubbleValue ==0;
        Bubble = i% bubbleValue ==0;
        switch(true){
            case Hubble && Bubble:{
                returnArray.push('HubbleBubble');
                break;
            
            }
            case Hubble:{
                returnArray.push('Hubble');
                break;

            }
            case Bubble:{
                returnArray.push('Bubble');
                break;
            }
            default : {
                returnArray.push(i);
                break;
            }


        }
    } 
    return returnArray;
}

function hubbleBubble3(hubbleValue,bubbleValue){
    let returnArray=[];
    for (let i = 0; i <= 100; i++) {
        let value =((i% hubbleValue ==0 ? 'Hubble' : '')+ (i% bubbleValue == 0 ? 'Bubble':'')|| i);
        returnArray.push(value);
        
    }
    return returnArray;

}
//loop over the array and create a tablerow
function displayData(hbArray) {

    //get the table body element from the page

    let tableBody = document.getElementById("results");

    //get the template row

    let templateRow = document.getElementById("hbTemplate");

    // clear the table first 
    tableBody.innerHTML = "";

    for (let index = 0; index < hbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab just the tds to put into array

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(hbArray[index]);
        
        rowCols[0].textContent = hbArray[index];
        
        rowCols[1].classList.add(hbArray[index +1]);
        rowCols[1].textContent = hbArray[index + 1];
       
        rowCols[2].classList.add(hbArray[index +2]);
        rowCols[2].textContent = hbArray[index + 2];
        
        rowCols[3].classList.add(hbArray[index +3]);
        rowCols[3].textContent = hbArray[index + 3];
        
        
        rowCols[4].classList.add(hbArray[index +4]);
        rowCols[4].textContent = hbArray[index + 4];


        tableBody.appendChild(tableRow);



    }
    //add all rows to the table




}