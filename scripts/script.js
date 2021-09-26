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
    document.getElementById('speedRange').disabled = true

    let sortAlgoArr = [bubbleSort, quickSort, mergeSort, insertionSort]
    await sortAlgoArr[sortInd](arr)

    await endPose(arr)

    document.getElementById('sortBtn').disabled = false
    document.getElementById('previewBtn').disabled = false
    document.getElementById('speedRange').disabled = false
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