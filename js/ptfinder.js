

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
                fcMemberTable += data.PLD != 0 ? "<td>" + data.PLD + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.WAR != 0 ? "<td>" + data.WAR + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.DRK != 0 ? "<td>" + data.DRK + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.GNB != 0 ? "<td>" + data.GNB + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.WHM != 0 ? "<td>" + data.WHM + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.SCH != 0 ? "<td>" + data.SCH + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.AST != 0 ? "<td>" + data.AST + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.MNK != 0 ? "<td>" + data.MNK + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.DRG != 0 ? "<td>" + data.DRG + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.NIN != 0 ? "<td>" + data.NIN + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.SAM != 0 ? "<td>" + data.SAM + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.BRD != 0 ? "<td>" + data.BRD + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.MCH != 0 ? "<td>" + data.MCH + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.DNC != 0 ? "<td>" + data.DNC + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.BLM != 0 ? "<td>" + data.BLM + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.SMN != 0 ? "<td>" + data.SMN + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td>"
                fcMemberTable += data.RDM != 0 ? "<td>" + data.RDM + "</td>" : "<td><i class=\"tiny material-icons\">block</i></td></tr>"
                fcMemberText += fcMemberTable;

                let partyMemberTable = "";
                partyMemberTable += "<tr><td>" + data.Player + "</td><td><div class=\"switch\"><label>No<input id=\"" + data.Player + " \" type=\"checkbox\"><span class=\"lever\"></span>Yes</label></div></td><tr>";
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