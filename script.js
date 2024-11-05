var sizeOfTable=11;
var directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
var indexI = indexJ = (sizeOfTable-1)/2;
var index_dir = 3
var table = document.getElementById("myTable");
var time = 500

function createTable(rows, cols) {
    var table = document.getElementById("myTable");
    table.innerHTML = ""; // ניקוי הטבלה הקיימת (אם יש)
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr"); // יצירת שורה חדשה
        for (var j = 0; j < cols; j++) {
            var td = document.createElement("td"); // יצירת תא חדש
            td.setAttribute("id", "cell-" + i + "-" + j); // הגדרת id ייחודי לכל תא
            var span = document.createElement("span"); // יצירת תג span לעטוף את הטקסט
            span.classList.add("rotated-text"); // הוספת המחלקה "rotated-text" לספאן
            td.appendChild(span); // הוספת ה-span לתוך התא 
            tr.appendChild(td); // הוספת תא לשורה
        }
        table.appendChild(tr); // הוספת שורה לטבלה
    }
     // עדכון גודל התאים כך שהטבלה תתפוס את כל המסך
    updateTableSize(rows, cols);
    table.rows[(sizeOfTable-1)/2].cells[(sizeOfTable-1)/2].querySelector("span").innerText='🕷'
    interval=setTimeout(() => change_ant(), time);
    index_dir=3;
    indexI = indexJ = (sizeOfTable-1)/2;
}

// פונקציה לעדכון גודל הטבלה כך שתתפוס את כל המסך
function updateTableSize(rows, cols) {
    var table = document.getElementById("myTable");
    var height = (600 / rows)*0.9; // גובה התא
    
    
    // הגדרת ממדי התאים לפי רוחב וגובה המסך
    var cells = table.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.width = height + "px";
        cells[i].style.height = height + "px";
        cells[i].style.fontSize = height*0.70 + "px";
    }
}

// פונקציה לרענון הטבלה לפי הגודל שהוזן
function refreshTable() {
    var size = parseInt(document.getElementById("sizeInput").value);
    if (size >= 1 && size <= 100 && size%2==1) {
        sizeOfTable=size;
        createTable(size, size); // יצירת טבלה בגודל שהוזן
    } else {
    }
}

createTable(11, 11)

function is_in_range(number)
{
    return number>=0 && number<sizeOfTable;
}

function change_i_j(i, j, index_dir, prev)
{
    index_dir += prev == 'black'? -1: 1

    if (is_in_range(i + directions[index_dir % 4][0]) && is_in_range(j + directions[index_dir % 4][1]))
        return [i+directions[index_dir % 4][0], j+directions[index_dir % 4][1], index_dir]
    return change_i_j(i, j, index_dir,prev)
}

function change_ant()
{
    var td = table.rows[indexI].cells[indexJ];
    prevColor = td.style.backgroundColor;
    td.style.backgroundColor = prevColor == 'black'? 'white':'black';
    td.querySelector("span").innerText='';
    var result=change_i_j(indexI,indexJ, index_dir, prevColor);
    indexI=result[0];
    indexJ=result[1];
    index_dir=result[2];
    table.rows[indexI].cells[indexJ].querySelector("span").innerText='🕷'
    table.rows[indexI].cells[indexJ].querySelector("span").style.transform = "rotate("+(90*index_dir)+"deg)";
    // עצירת קריאה קודמת של setTimeout
    clearTimeout(interval);
    // קריאה מחודשת אחרי timems
    interval = setTimeout(() => change_ant(), time);
}

function changeTime()
{
    console.log(time)
    time=(document.getElementById("timeInput").value)*1000;
    console.log(time)
}    
