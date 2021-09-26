let time = 100
let numElems = 10
let arr, elemArr, speed

let shuffle = (arr) => {
    let currInd = arr.length
    let randInd

    while (currInd > 0) {
        randInd = Math.floor(Math.random() * currInd)
        currInd--

        // Swaperoo 
        [arr[currInd], arr[randInd]] = [
            arr[randInd], arr[currInd]]
    }
    return arr;
}

let randomiseArr = (size) => {
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(i + 1)
    }
    arr = shuffle(arr)
    return arr
}

let firstRender = (arr) => {
    let newElemArr = []
    let disp = document.getElementById('display')
    disp.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let elem = document.createElement('div')
        elem.classList.add('bar')
        elem.style.height = `${arr[i] * (400 / arr.length)}px`
        elem.value = arr[i]
        newElemArr.push(elem)
        disp.appendChild(elem)
    }

    return newElemArr
}

let renderArr = (arr) => {
    let tmpClassList = {}
    let currElemArr = document.getElementsByClassName('bar')
    if (currElemArr.length > 0) {
        for (let elem of currElemArr) {
            tmpClassList[elem.value] = elem.classList
        }
    }

    let newElemArr = []
    let disp = document.getElementById('display')
    disp.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let elem = document.createElement('div')
        elem.classList = (currElemArr.length == 0) ? ['bar'] : tmpClassList[arr[i]]
        elem.style.height = `${arr[i] * (400 / arr.length)}px`
        elem.value = arr[i]
        newElemArr.push(elem)
        disp.appendChild(elem)

    }

    return newElemArr

}

let selectorFunc = (val) => {
    let arrOfElem = document.getElementsByClassName('bar')
    for (let elem of arrOfElem) {
        if (elem.value == val) {
            elem.classList.add('select')
        }
    }
}

let unselectorFunc = (val) => {
    let arrOfElem = document.getElementsByClassName('bar')
    for (let elem of arrOfElem) {
        if (elem.value == val) {
            elem.classList.remove('select')
            elem.classList.remove('standout')
            elem.classList.remove('correctPos')
        }
    }
}

let correctPosFunc = (val) => {
    let arrOfElem = document.getElementsByClassName('bar')
    for (let elem of arrOfElem) {
        if (elem.value == val) {
            elem.classList.remove('select')
            elem.classList.add('correctPos')
        }
    }

}

let standoutFunc = (val) => {
    let arrOfElem = document.getElementsByClassName('bar')
    for (let elem of arrOfElem) {
        if (elem.value == val) {
            // elem.style.backgroundColor = 'black'
            elem.classList.remove('select')
            elem.classList.add('standout')
        }
    }
}

let endPose = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        correctPosFunc(arr[i])
        await wait(time)
    }
}

let wait = async (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}