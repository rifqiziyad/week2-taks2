const name = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana','Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (keyWord, limit, callback ) => {
  const saring = name.filter(str => { return str.toLowerCase().includes(keyWord) })
  const batas = saring.slice(0,limit)
  callback(batas)
}

function output(o){ console.log(o) }

searchName('li',3,output)



