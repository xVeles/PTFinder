let bingo = [];

let addButton = document.getElementById("add-criteria");
let createButton = document.getElementById("create");

let criterias1 = document.getElementById("criterias-1");
let criterias2 = document.getElementById("criterias-2");

let input = document.getElementById("bingo-criteria");

let table = document.getElementById("bingo");

function init()
{
  addButton.addEventListener("click", () =>
  {
      addCriteria();
  });

  createButton.addEventListener("click", () =>
  {
    createBingo();
  });
}

function addCriteria()
{
  if (input.value == "") return;

  bingo.push(input.value);

  makeList();

  input.value = "";
}

function remove(index)
{
  criterias1.innerHTML = "";
  criterias2.innerHTML = "";

  let bingoList = [];
  for (let i = 0; i < bingo.length; i++)
  {
    if (i != index)
    {
      bingoList.push(bingo[i]);
    }
  }

  bingo = bingoList;

  makeList();
}

function makeList()
{
  let content1 = "";
  let content2 = "";

  for (let i = 0; i < bingo.length; i++)
  {
    if (i < 13)
    {
      content1 += "<li class=\"collection-item\">" + (i+1) + " " + bingo[i] +  "<a class=\"black-text\" href=\"#\"><i class=\"material-icons right\" onmousedown=\"remove(" + i + ")\">close</i></a></li>";
      console.log("1");
    }
    else 
    {
      content2 += "<li class=\"collection-item\">" + (i+1) + " " + bingo[i] +  "<a class=\"black-text\" href=\"#\"><i class=\"material-icons right\" onmousedown=\"remove(" + i + ")\">close</i></a></li>";
    }
  }

  criterias1.innerHTML = content1;
  criterias2.innerHTML = content2;

  if (bingo.length == 25)
  {
    addButton.setAttribute("class", "btn disabled");
    createButton.setAttribute("class", "btn red accent-4");
    input.setAttribute("disabled", "");
  }
  else
  {
    addButton.setAttribute("class", "btn");
    createButton.setAttribute("class", "btn red accent-4 disabled");
    input.removeAttribute("disabled");
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createBingo()
{
  let shuffledBingo = bingo;
  shuffle(shuffledBingo);

  let row = 0;

  console.log(bingo);
  console.log(shuffledBingo);
  let content = "<tr>";



  for (let i = 0; i < shuffledBingo.length; i++)
  {
    if (i % 5 == 0) content += "</tr><tr>";

    content += "<td>" + shuffledBingo[i] + "</td>";
  }

  table.innerHTML = content;
}

init();