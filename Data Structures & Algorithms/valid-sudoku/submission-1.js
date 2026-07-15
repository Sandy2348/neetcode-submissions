class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        
        for(let i = 0; i < board.length; i++){
            if(i<3){
                  arr1.push(board[i])
            }
             else if(i<6){
                  arr2.push(board[i])
            }
            else {
                  arr3.push(board[i])
            }
        }
        console.log("arr1",arr1,"arr2",arr2,"arr3",arr3)
        let arr1Board1 = [];
        let arr1Board2 = [];
        let arr1Board3 = [];
        let arr2Board1 = [];
        let arr2Board2 = [];
        let arr2Board3 = [];
        let arr3Board1 = [];
        let arr3Board2 = [];
        let arr3Board3 = [];
        arr1Board1.push(arr1[0].slice(0,3),arr1[1].slice(0,3),arr1[2].slice(0,3))
        arr1Board2.push(arr1[0].slice(3,6),arr1[1].slice(3,6),arr1[2].slice(3,6))
        arr1Board3.push(arr1[0].slice(6,9),arr1[1].slice(6,9),arr1[2].slice(6,9))
        arr2Board1.push(arr2[0].slice(0,3),arr2[1].slice(0,3),arr2[2].slice(0,3))
        arr2Board2.push(arr2[0].slice(3,6),arr2[1].slice(3,6),arr2[2].slice(3,6))
        arr2Board3.push(arr2[0].slice(6,9),arr2[1].slice(6,9),arr2[2].slice(6,9))
        arr3Board1.push(arr3[0].slice(0,3),arr3[1].slice(0,3),arr3[2].slice(0,3))
        arr3Board2.push(arr3[0].slice(3,6),arr3[1].slice(3,6),arr3[2].slice(3,6))
        arr3Board3.push(arr3[0].slice(6,9),arr3[1].slice(6,9),arr3[2].slice(6,9))
        console.log("arr1Board1",arr1Board1)
        
       
        let org1Array1 = arr1Board1.flat(Infinity);
        let org1Array2 = arr1Board2.flat(Infinity);
        let org1Array3 = arr1Board3.flat(Infinity);
        let org2Array1 = arr2Board1.flat(Infinity);
        let org2Array2 = arr2Board2.flat(Infinity);
        let org2Array3 = arr2Board3.flat(Infinity);
        let org3Array1 = arr3Board1.flat(Infinity);
        let org3Array2 = arr3Board2.flat(Infinity);
        let org3Array3 = arr3Board3.flat(Infinity);
       
        let org1Arr1 = []
        let org1Arr2 = []
        let org1Arr3 = []
        let org2Arr1 = []
        let org2Arr2 = []
        let org2Arr3 = []
        let org3Arr1 = []
        let org3Arr2 = []
        let org3Arr3 = [];
        function iteration(arrayName,orgArray){
             for(let i = 0; i <arrayName.length; i++ ){
            if(arrayName[i]>=1 && arrayName[i]<=9){
orgArray.push(+arrayName[i])
            }
        }
        }
        iteration(org1Array1,org1Arr1)
        iteration(org1Array2,org1Arr2)
        iteration(org1Array3,org1Arr3)
        iteration(org2Array1,org2Arr1)
        iteration(org2Array2,org2Arr2)
        iteration(org2Array3,org2Arr3)
        iteration(org3Array1,org3Arr1)
        iteration(org3Array2,org3Arr2)
        iteration(org3Array3,org3Arr3)
         console.log("org1Array1",org1Array1,"org1Array2",org1Array2,"org1Array3",org1Array3,"org2Array1",org2Array1,"org2Array2",org2Array2,"org2Array3",org2Array3,"org3Array1",org3Array1,"org3Array2",org3Array2,"org3Array3",org3Array3)
        console.log("org1Arr1",org1Arr1,"org1Arr2",org1Arr2,"org1Arr3",org1Arr3,"org2Arr1",org2Arr1,"org2Arr2",org2Arr2,"org2Arr3",org2Arr3,"org3Arr1",org3Arr1,"org3Arr2",org3Arr2,"org3Arr3",org3Arr3)
        function finalAnswer(arrName){
           console.log("first",arrName)
          return arrName.every((res,index)=>{
            
            return index == arrName.indexOf(res)
          })
        }
       let newVal9 = finalAnswer(org1Arr1);
     let newVal1 =   finalAnswer(org1Arr2)
       let newVal2 = finalAnswer(org1Arr3)
       let newVal3 = finalAnswer(org2Arr1)
        let newVal4 = finalAnswer(org2Arr2)
        let newVal5 = finalAnswer(org2Arr3)
        let newVal6 = finalAnswer(org3Arr1)
        let newVal7 = finalAnswer(org3Arr2)
        let newVal8 = finalAnswer(org3Arr3)
        if(newVal9 == false || newVal1 == false || newVal2 == false || newVal3 == false || newVal4 == false ||newVal5 == false ||newVal6 == false ||newVal7 == false ||newVal8 == false ){
return false
        }
          for(let i = 0; i < 9; i++){

            let row = [];

            for(let j = 0; j < 9; j++){

                if(board[i][j] !== "."){
                    row.push(board[i][j]);
                }

            }

            if(finalAnswer(row) === false){
                return false;
            }

        }
         for(let i = 0; i < 9; i++){

            let column = [];

            for(let j = 0; j < 9; j++){

                if(board[j][i] !== "."){
                    column.push(board[j][i]);
                }

            }

            if(finalAnswer(column) === false){
                return false;
            }

        }
        return true


       
      
          
        
    }
}
