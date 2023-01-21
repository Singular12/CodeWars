   // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  //
  
  function sumArray(array)  {
    if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    }

    return 0
}

// PROBABLY SHOULD NOT BE AN 8 KYU.
