const addItem = function(item) {
  this.push(item);
}

const removeItem = function(item) {
  const index = this.indexOf(item);
  if (index !== -1) {
    this.splice(index, 1);
  }
  else console.log('Not found in list');
}

const printItems = function() {
  for(const item of this){
    console.log(item.name);
  }
}

export { addItem, removeItem, printItems };