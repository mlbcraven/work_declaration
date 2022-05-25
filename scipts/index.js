let worker = document.querySelector('#workers');
let work = document.querySelector('#works')
let entryBtn = document.querySelector('btnEntry')
let workerTv = document.getElementById('WorkerTV');
let workTv = document.getElementById('WorkTV')

function createInstance() {
    workerTv.textContent = worker
    workTv.textContent = work
}

btnEntry.onClick = createInstance