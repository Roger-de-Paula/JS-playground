let data = [
    {
        name:'Roger',
        age:'50'
    },
    {
        name:'Lila',
        age:'26'
    },
    {
        name:'Bob',
        age:'20'
    },
    {
        name:'Ashley',
        age:'25'
    },
    {
        name:'Ashley',
        age:'25'
    },
    {
        name:'Ashley',
        age:'25'
    },
    {
        name:'Ashley',
        age:'25'
    },
    {
        name:'Ashley',
        age:'25'
    },

];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return `<div> ${item.name} is ${item.age} years old </div>`;
});

info.innerHTML = details.join('\n')