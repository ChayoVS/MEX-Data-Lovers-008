const printAllAvatar = document.getElementById("allAvatar"); 
const dataBase = LOL;
let champions = Object.values(dataBase.data);

//En vez de usar forEach, uso for

const showChampions= (champions) => {
  let str = "";
  for (let i = 0; i < champions.length; i++) {
    str += `<div  class="img-champions" >
        <img id="img-avatar" src="${champions[i].img}">
        </img>
        <br>
      <div>
       ${champions[i].name}
      </div>
    </div>`;
  }

  printAllAvatar.innerHTML = str;
};

showChampions(champions);