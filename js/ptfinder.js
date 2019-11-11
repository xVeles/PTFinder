

function init()
{
    loadMemberjsonText();
}

function loadMemberjsonText()
{
    console.log("Loading Member jsonText");
    const memberTable = document.getElementById("fc-members");
    const partyTable = document.getElementById("party-members");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            console.log(xhr.responseText);
            const jsonText = JSON.parse(xhr.responseText);
            let tablejsonText = "";

            jsonText.array.forEach(jsonText => 
            {
                let fcMemberTable = "<tr>";
                fcMemberTable += "<td>" + jsonText.Player + "</td>";
                fcMemberTable += jsonText.PLD != 0 ? "<td>" + jsonText.PLD + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.WAR != 0 ? "<td>" + jsonText.WAR + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.DNK != 0 ? "<td>" + jsonText.DNK + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.GNB != 0 ? "<td>" + jsonText.GNB + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.WHM != 0 ? "<td>" + jsonText.WHM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.SCH != 0 ? "<td>" + jsonText.SCH + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.AST != 0 ? "<td>" + jsonText.AST + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.MNK != 0 ? "<td>" + jsonText.MNK + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.DRG != 0 ? "<td>" + jsonText.DRG + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.NIN != 0 ? "<td>" + jsonText.NIN + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.SAM != 0 ? "<td>" + jsonText.SAM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.BRD != 0 ? "<td>" + jsonText.BRD + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.MCH != 0 ? "<td>" + jsonText.MCH + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.DNC != 0 ? "<td>" + jsonText.DNC + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.BLM != 0 ? "<td>" + jsonText.BLM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.SMN != 0 ? "<td>" + jsonText.SMN + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += jsonText.RDM != 0 ? "<td>" + jsonText.RDM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                tablejsonText += fcMemberTable;

                let partyMemberTable = "";
                partyMemberTable += "<td>" + jsonText.Player + "</td><td><div class=\"switch\"><label>Off<input type=\"checkbox\"><span class=\"lever\"></span>On</label></div";

            });
            memberTable.innerHTML = tablejsonText;
            partyTable.innerHTML = partyTable;
        }        
    }

    xhr.open("GET", "js/memberjsonText.txt", true);
    xhr.send();
}

let characterRoles = [];

function checkRoles()
{
    

}

window.onload = init;