

function init()
{
    loadMemberjsonText();
}

let fcMembers = [];
let fcData = [];

function loadMemberjsonText()
{
    console.log("Loading Member jsonText");
    const memberTable = document.getElementById("fc-members");
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            const jsonText = JSON.parse(xhr.responseText);
            let fcMemberText = "";
            
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

                if (!fcMembers.includes(data))
                {
                    fcMembers.push(data.Player);
                    fcData.push(data);
                }
            });
            memberTable.innerHTML = fcMemberText;
        }        
    }
    
    xhr.open("GET", "js/memberData.txt", true);
    xhr.send();

    setTimeout(displayPartyMaker, 300);
    
    
}

function displayPartyMaker()
{
    console.log("Making format");
    const partyTable = document.getElementById("party-members");

    let partyForm = "<h5>Party Members</h5><div class=\"input-field\">";

    for (let i = 0; i < 8; i++)
    {
        partyForm += "<select id=\"party-member-" + i +"\"><option value=\"default\">Select Player " + i + "</option>";
        fcMembers.forEach(player =>
        {
            partyForm += "<option value=\"" + player +"\">" + player + "</option>";
        });
        partyForm += "</select>";
    }
    partyForm += "<a id=\"submit-party\" class=\"indigo darken-3 waves-effect waves-light btn center\">Make Party</a><br><span id=\"pterror\"></span>";

    partyTable.innerHTML = partyForm;

    
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, fcMembers);

    let submit = document.getElementById('submit-party');
    submit.addEventListener("click", getPartyMembers);
}

let partyMembers = [];

function getPartyMembers()
{
    partyMembers = [];
    const ptError = document.getElementById("pterror");

    for (let i = 0; i < 8; i++)
    {
        const ptMember = document.getElementById("party-member-" + i);
        partyMembers.push(ptMember.value);
    }

    if (partyMembers.includes("default"))
    {
        M.toast({html: 'Error while making party!'});
        ptError.textContent = "Error: One or more players haven't been selected";
        return;
    }

    let dups = partyMembers.filter((player, index) => partyMembers.indexOf(player) != index);
    if (dups.length != 0)
    {
        M.toast({html: 'Error while making party!'})
        ptError.textContent = "Error: Duplicate Players have been selected";
        return;
    }
    M.toast({html: 'Successfully made party!'})
}

function checkRoles()
{
    
}

window.onload = init;