
function clickAscending() {
    let sort = watchMen
    let arr = []
    for (let i = 0; i < sort.length; i++) {
        for (let j = i + 1; j < sort.length; j++) {
            if (sort[i].coin > sort[j].coin) {
                let temp = sort[i].coin
                sort[i].coin = sort[j].coin
                sort[j].coin = temp
            }
        }
    }
    for (let i = 0; i < sort.length; i++) {
        arr.push(sort[i].coin)
    }
    return arr
}