
export const getMergeSortAnimation =(array) => {
    const animations =[];
    if(array.length <= 1) return array;
    const auxilaryArray = array.slice();
    mergeSortHelper(array,0,array.length-1,auxilaryArray,animations);
    return animations
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxilaryArray,
    animations
){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx)/2);


    mergeSortHelper(auxilaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxilaryArray,middleIdx+1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxilaryArray,animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxilaryArray,
    animations
){
        let k = startIdx,
    i = startIdx,
    j = middleIdx+1;
    if(startIdx===0 && endIdx===auxilaryArray.length-1){
        console.log(animations.length);
    }
    while(i<= middleIdx && j<=endIdx){
        animations.push([i,j]);
        animations.push([i, j]);

        if(auxilaryArray[i]<auxilaryArray[j]){

           animations.push([k,auxilaryArray[i]]); 
           mainArray[k++] = auxilaryArray[i++]; 
        }
        else{
            animations.push([k, auxilaryArray[j]]);
            mainArray[k++]=auxilaryArray[j++]; 
        }

    }
    while(i<= middleIdx){
        animations.push([i,i]);
        animations.push([i, i]);
        animations.push([k, auxilaryArray[i]]);
        mainArray[k++] = auxilaryArray[i++]; 
    }
    while(j<= endIdx){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxilaryArray[j]]);
        mainArray[k++] = auxilaryArray[j++]; 
    }
}



export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

