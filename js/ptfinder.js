

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
                fcMemberTable += data.PLD != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.WAR != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.DRK != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.GNB != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.WHM != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.SCH != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.AST != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.MNK != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.DRG != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.NIN != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.SAM != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.BRD != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.MCH != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.DNC != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.BLM != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.SMN != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td>"
                fcMemberTable += data.RDM != "false" ? "<td><i class=\"tiny material-icons\">check</i></td>" : "<td></td></tr>"
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

    checkRoles();
}

let finalisedParty = [];

function checkRoles()
{
    let selectedMembers = fcData.filter(data => partyMembers.includes(data.Player));


}

function tankSelect(playerData)
{
    let tankPlayers = playerData.filter(data => data.PLD > 8 || data.WAR > 8 || data.DRK > 8 || data.GNB > 8);
    let selectedTanks = [];
    console.log(tankPlayers);

    for (let i = 0; i < tankPlayers.length; i++)
    {
        let tank = [tankPlayers[i].Player];
        tank[1] = chance.weight(["PLD", "WAR", "DRK", "GNB"], [tankPlayers[i].PLD, tankPlayers[i].WAR], tankPlayers[i].DRK, tankPlayers[i].GNB);
    }
}

window.onload = init;