function remove(array,item) {
  if(array == null || item == null){
    return null;
  }
  for(let index in array){
    if(array[index]['name'] == item['name']){
      array.splice(index,1);
    }
  }
}
export default {
  remove,
}

