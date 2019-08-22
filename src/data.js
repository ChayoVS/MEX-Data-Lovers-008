const roleBtn = document.getElementsByClassName('roleBtn');
// console.log(roleBtn);
for (let index = 0; index < roleBtn.length; index++) {
const roleBtn = document.getElementsByClassName('roleBtn');
  roleBtn[index].addEventListener ('click', ()=> {
    //   document.getElementById('allAvatar').innerHTML= "Hola";
    // allAvatar.style.display = 'none'
    const idTarget = event.target.id;
    const roleClick = newArray.filter(championRole => championRole.tags[0] == idTarget || championRole.tags[1] == idTarget);
    // console.log(roleClick);
    //jugando con tarjetas diferentes
    // printByRole(roleClick)
    showChampions(roleClick)
  })
}

const sorData= (newArray, sortBy, sortOrder) => {
    let newOrderData = [];
    switch (sortOrder) {
        case 'ASC':
            if(sortBy === 'name') {
                newOrderData = newArray.sort ((a,b)=> (a.name > b.name ? 1:-1));
            } 
            break;
  
        case 'DESC':
            if(sortBy === 'name') {
                newOrderData = newArray.sort ((a,b) => (a.name < b.name ? 1:-1));
            }
            break;
    }
    return newOrderData;
  };


window.roleBtn = roleBtn
window.sorData = sorData
