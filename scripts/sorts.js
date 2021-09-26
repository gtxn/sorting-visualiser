let swap = async (arr, i, j) => {
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

// Bubble sort
let bubbleSort = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            selectorFunc(arr[j])
            if (j < arr.length - i - 1) {
                selectorFunc(arr[j + 1])
            }

            await wait(time)

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                renderArr(arr)

            }

            unselectorFunc(arr[j])
            if (j < arr.length - i - 1) {
                unselectorFunc(arr[j + 1])
            }
        }

        correctPosFunc(arr[arr.length - i - 1])
        await wait(time * 2)
        unselectorFunc(arr[arr.length - i - 1])

    }
    return arr
}

// Quick sort
let split = async (a, left, right) => {
    var pivot = a[Math.floor((right + left) / 2)] //middle element
    standoutFunc(pivot)
    await wait(time)

    while (left <= right) {
        while (a[left] < pivot) {
            selectorFunc(a[left])
            await wait(time)
            unselectorFunc(a[left])
            left++;
        }
        while (a[right] > pivot) {
            selectorFunc(a[right])
            await wait(time)
            unselectorFunc(a[right])
            right--;
        }
        if (left <= right) {
            if (a[left] != pivot && a[right] != pivot) {
                selectorFunc(a[left])
                selectorFunc(a[right])
                swap(a, left, right); //swap two elements
                await wait(time)
                renderArr(a)
                unselectorFunc(a[left])
                unselectorFunc(a[right])
            } else {
                swap(a, left, right); //swap two elements
            }
            left++;
            right--;
        }
    }

    correctPosFunc(pivot)
    await wait(time)
    unselectorFunc(pivot)
    renderArr(a)
    return left;
}


let quickSort = async (arr, low, high) => {
    if (low < high) {
        let pos = await split(arr, low, high)
        await quickSort(arr, low, pos - 1)
        await quickSort(arr, pos, high)
    }
    renderArr(arr)

    return arr
}

// Merge sort 
let merge = async (arr, low, mid, high) => {
    let a1 = (low == mid) ? [arr[low]] : [...arr.slice(low, mid + 1)]
    let a2 = (mid + 1 == high) ? [arr[high]] : [...arr.slice(mid + 1, high + 1)]
    let k = low

    while (a1.length > 0 && a2.length > 0) {
        selectorFunc(a1[0])
        await wait(time)
        selectorFunc(a2[0])
        await wait(time)
        arr[k] = ((a1[0] < a2[0]) ? a1.shift() : a2.shift())
        k++
    }

    while (a1.length) {
        selectorFunc(a1[0])
        await wait(time)
        selectorFunc(a2[0])
        await wait(time)
        arr[k] = (a1.shift())
        k++
    }

    while (a2.length) {
        selectorFunc(a1[0])
        await wait(time)
        selectorFunc(a2[0])
        await wait(time)
        arr[k] = (a2.shift())
        k++
    }

    for (let corElem of arr.slice(low, high + 1)) {
        correctPosFunc(corElem)
    }
    await wait(time)

    for (let selectedE of arr) {
        unselectorFunc(selectedE)
    }

    renderArr(arr)

    return arr
}

let mergeSort = async (arr, low, high) => {
    if (low < high) {
        let mid = Math.floor((low + high) / 2)
        await mergeSort(arr, low, mid)
        await mergeSort(arr, mid + 1, high)
        await merge(arr, low, mid, high)
    }
}

// Insertion sort
let insertionSort = async (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let target = arr[i]
        await wait(time)
        selectorFunc(target)
        await wait(time)
        let j = i
        while (j > 0 && target < arr[j - 1]) {
            swap(arr, j, j - 1)
            j -= 1

            await wait(time)
            renderArr(arr)
        }

        await wait(time)
        correctPosFunc(target)
        await wait(time)
        unselectorFunc(target)

        console.log(arr)
        renderArr(arr)
    }

    renderArr(arr)
}
