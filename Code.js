let selfDestructActivated = false;
let launchActivated = false;
let stopped = false;

function countDown()
{alert("Countdown beginning. Prepare for test run...");

countBlastoff();
    var currTime = 10;
    //timer for 10 sec left   
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);{
    

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}
}

function countBlastoff() //Function for what happens after start button is clicked
{
    launchActivated = true;
    stopped = false;
    document.getElementById("launch").disabled = true;//turns on start button
    document.getElementById("abort").disabled = false;// turn off stop button

    for (let z = 10;z >=0; z--)
    {timerID = setTimeout(function () {
       if (stopped)
       {
        clearTimeout(timerID);
       } 
       else
       {
       document.getElementById("countDownTimer").innerHTML = z;
       }
    }, (10-z) * 1000);

    }
}



function Stop()  //function for the Stop button
{
    if (launchActivated)
    {
        let answer  = prompt("Cancel request detected. Are you sure?  Yes/No");
        if (answer == "Yes"  )
        {
            alert(("Test launch cancelled."));
            stopped = true;
            document.getElementById("launch").disabled =false;//turns off start button
document.getElementById("abort").disabled = true;// turns on stop sound button
            document.getElementById("countDownTimer").innerHTML = "Timer is displayed here ";

        }
        else if (answer == "No, keep running")
        {
            alert("Resuming Test Launch...");
        }
        else
    {
        alert("Cancel request unconfirmed- No action has been taken...");

    }
}   
}