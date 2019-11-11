

function init()
{
    loadMemberData();
}

function loadMemberData()
{
    console.log("Loading Member Data");
    const memberTable = document.getElementById("fc-member-data");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            console.log(xhr.responseText);
            const jsonText = JSON.parse(xhr.responseText);
            let tableData = "";

            jsonText.array.forEach(data => 
            {
                let tableEntry = "<tr>";
                tableEntry += "<td>" + data.Player + "</td>";
                tableEntry += "<td>" + data.PLD + "</td>";
                tableEntry += "<td>" + data.WAR + "</td>";
                tableEntry += "<td>" + data.DRK + "</td>";
                tableEntry += "<td>" + data.GNB + "</td>";
                tableEntry += "<td>" + data.WHM + "</td>";
                tableEntry += "<td>" + data.SCH + "</td>";
                tableEntry += "<td>" + data.AST + "</td>";
                tableEntry += "<td>" + data.MNK + "</td>";
                tableEntry += "<td>" + data.DRG + "</td>";
                tableEntry += "<td>" + data.NIN + "</td>";
                tableEntry += "<td>" + data.SAM + "</td>";
                tableEntry += "<td>" + data.BRD + "</td>";
                tableEntry += "<td>" + data.MCH + "</td>";
                tableEntry += "<td>" + data.DNC + "</td>";
                tableEntry += "<td>" + data.BLM + "</td>";
                tableEntry += "<td>" + data.SMN + "</td>";
                tableEntry += "<td>" + data.RDM + "</td></tr>";
                tableData += tableEntry;
            });
            memberTable.innerHTML = tableData;
        }        
    }

    xhr.open("GET", "memberData.json", true);
    xhr.send();
}

function writeMemberData()
{

}

window.onload = init;