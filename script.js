const addbtn = document.querySelector('button');
addbtn.addEventListener('click', () => {
    const data = document.querySelector('input').value;
    if (data !== "") {
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        ul.appendChild(li);
        li.innerHTML = data;
        document.querySelector('input').value = "";
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.append(span);
        saveData();
    }

})

const tasks = document.querySelector('ul');
tasks.addEventListener('click',(e)=> {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", tasks.innerHTML);
}
function showData() {
    tasks.innerHTML = localStorage.getItem("data");
}
showData();