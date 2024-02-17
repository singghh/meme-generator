var i=-1;

async function fetchdata(){

    try{
        const response=await fetch("https://api.imgflip.com/get_memes");
        const img=document.getElementById("meme-pic");
        
        
        if(!response.ok){
            throw new Error("Error");
        }

        const data=await response.json();

        i++;

        ans1=data.data.memes[i].url;

        img.src=ans1

        
    }
    catch(error){
        console.error(error);
    }

}
fetchdata();

var j=0;

async function fetchdata1(){

    const response=await fetch("https://api.imgflip.com/get_memes");

    const img=document.getElementById("meme-pic");

    if(!response.ok){
        throw new Error("cant back");
    }

    const data=await response.json();
    i--;
    ans1=data.data.memes[i].url;
    img.src=ans1;

}
fetchdata1();

