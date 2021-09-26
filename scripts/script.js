let sortArr = async () => {
    let selected = document.getElementById('sortSelect')
    let sortInd = selected.value
    speed = parseInt(document.getElementById('speedRange').value)

    numElems = parseInt(document.getElementById('numElems').value)
    arr = randomiseArr(numElems)
    elemArr = firstRender(arr)
    time = 100 / speed

    document.getElementById('sortBtn').disabled = true
    document.getElementById('previewBtn').disabled = true


    if (sortInd == 1) {
        await bubbleSort(arr)
    }
    else if (sortInd == 2) {
        await quickSort(arr, 0, arr.length)
    }
    else if (sortInd == 3) {
        await mergeSort(arr, 0, arr.length - 1)
    }
    else if (sortInd == 4) {
        await insertionSort(arr)
    }
    await endPose(arr)

    document.getElementById('sortBtn').disabled = false
    document.getElementById('previewBtn').disabled = false
}

let slowDown = () => {
    time = time * 1.24
    console.log(time, 't')
}

let speedUp = () => {
    time = time * 0.75
    console.log(time, 't')
}

let reset = () => {
    numElems = document.getElementById('numElems').value
    arr = randomiseArr(numElems)
    time = 100 / document.getElementById('speedRange').value
    elemArr = firstRender(arr)
    speed = parseInt(document.getElementById('speedRange').value)
}

// Initialise once window is loaded
window.onload = reset