const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let tables=document.getElementById("tablevalue")

const getSum = () => {
    //Add your code here
    let prices = document.querySelectorAll(".price")
    let sum = 0
    console.log("hi");
    for (let t of prices) {
        //console.log(t.innerHTML);
        sum += Number(t.innerHTML);
    }
    console.log(sum);
    let lastrow=document.createElement("tr")
    let lastrowvalue=document.createElement("td")
    lastrowvalue.innerHTML=sum
    lastrow.append(lastrowvalue)
    // let lastrow = `<tr>${sum}</tr>`
    //document.body.appendChild(lastrow);
    tables.appendChild(lastrow)
};

getSumBtn.addEventListener("click", getSum);

