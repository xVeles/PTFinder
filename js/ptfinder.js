

function init()
{
    loadMemberjsonText();
}

let fcMembers = [];

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
            let fcMemberText = "";
            let partyMemberText = "";

            jsonText.forEach(data => 
            {
                let fcMemberTable = "<tr>";
                fcMemberTable += "<td>" + data.Player + "</td>";
                fcMemberTable += data.PLD != 0 ? "<td>" + data.PLD + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.WAR != 0 ? "<td>" + data.WAR + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.DNK != 0 ? "<td>" + data.DNK + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.GNB != 0 ? "<td>" + data.GNB + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.WHM != 0 ? "<td>" + data.WHM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.SCH != 0 ? "<td>" + data.SCH + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.AST != 0 ? "<td>" + data.AST + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.MNK != 0 ? "<td>" + data.MNK + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.DRG != 0 ? "<td>" + data.DRG + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.NIN != 0 ? "<td>" + data.NIN + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.SAM != 0 ? "<td>" + data.SAM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.BRD != 0 ? "<td>" + data.BRD + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.MCH != 0 ? "<td>" + data.MCH + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.DNC != 0 ? "<td>" + data.DNC + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.BLM != 0 ? "<td>" + data.BLM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.SMN != 0 ? "<td>" + data.SMN + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberTable += data.RDM != 0 ? "<td>" + data.RDM + "</td>" : "<i class=\"tiny material-icons\">block</i>"
                fcMemberText += fcMemberTable;

                let partyMemberTable = "";
                partyMemberTable += "<td>" + data.Player + "</td><td><div class=\"switch\"><label>Off<input type=\"checkbox\"><span class=\"lever\"></span>On</label></div";
                partyMemberText += partyMemberTable

                if (!fcMembers.includes(data.Player))
                    fcMembers.push(data.Player);
            });
            memberTable.innerHTML = fcMemberText;
            partyTable.innerHTML = partyMemberText;
        }        
    }

    xhr.open("GET", "js/memberData.txt", true);
    xhr.send();
}

let characterRoles = [];

function getPartyMembers()
{

}

function checkRoles()
{
    

}

window.onload = init;