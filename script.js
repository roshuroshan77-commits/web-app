const no = document.getElementById("no");
no.addEventListener("mouseover", () =>
{
    const rect = no.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 120){
        const x = Math.random() * (window.innerWidth - no.offsetWidth);
        const y = Math.random() * (window.innerHeight - no.offsetHeight);
        no.style.position = "fixed";
        no.style.left = x + "px";
        no.style.top = y + "px";
    }  
});

document.getElementById("yes-btn").onclick = function(){
    document.body.innerHTML = `
    <div style="
    display:flex;
    font-size:50px;
    color:#ec6d95;
    font-family:arial;
    text-align:center;
    margin:200px;
    ">
    <p> Yay! you said yes!💗</p>
        </div>
    `;

};