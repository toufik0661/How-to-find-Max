function maximum(){
  let array = [4, 5, 6 ,13, 45, 56, 78]
  let max= array[0]
  for(let i=0; i<array.length; i++){
      if(array[i]>max){
        max= array[i]
      }
     
  }
   console.log(`The lergest element in array is ${max}`)
}
maximum();