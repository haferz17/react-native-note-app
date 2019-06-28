let data = [
    {
      id: 1,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList This tutorial explains how to use FlatList ",
      time: '28 Jun',
      category: 'School',
      code: ''
    },
    {
      id: 2,
      title: 'Learn2',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Sports',
      code: ''
    },
    {
      id: 3,
      title: 'Learn3',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Work',
      code: ''
    },
    {
      id: 4,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Work',
      code: ''
    },
    {
      id: 5,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Health',
      code: ''
    },
    {
      id: 6,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'School',
      code: ''
    },
    {
      id: 7,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Health',
      code: ''
    },
    {
      id: 8,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Sports',
      code: ''
    },
    {
      id: 9,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Sports',
      code: ''
    },
    {
      id: 10,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Health',
      code: ''
    },
    {
      id: 11,
      title: 'Learn',
      note: "This tutorial explains how to use FlatList.",
      time: '28 Jun',
      category: 'Health',
      code: ''
    },
];

const numColumns = 2;
let row = data.length - (Math.floor(data.length / numColumns)*2);
if(row!==numColumns&&row!==0){
  data.push({title:'blank'});
}


for(let a=0;a<data.length;a++){
  if(data[a].category==='School'){
    data[a].code = '#29B6F6' 
  }
  else if(data[a].category==='Work'){
    data[a].code = '#FFE082' 
  }
  else if(data[a].category==='Sports'){
    data[a].code = '#D4E157' 
  }
  else if(data[a].category==='Health'){
    data[a].code = '#F48FB1' 
  }
}

module.exports = data;