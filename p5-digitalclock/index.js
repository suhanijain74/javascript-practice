function updateCLock(){
    const now = new Date();
    let h = now.getHours();

    const meridiem = h>=12 ? "PM" : "AM";
    h = h%12 || 12;
    h =h.toString().padStart(2,0);

    const m = now.getMinutes().toString().padStart(2,0);
    const s = now.getSeconds().toString().padStart(2,0);
    const timeString = `${h}:${m}:${s} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateCLock();
setInterval(updateCLock,1000);