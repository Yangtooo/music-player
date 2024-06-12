const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
// 顯示歌曲封面的元素
const cover = document.querySelector('#cover')

//song title
const songs = ['Đừng Làm Trái Tim Anh Đau']

// keep track of songs
let songIndex = 0;

// load song info DOM
// DOM:把HTML文件中的元素定義成物件(包括圖片、文字等)
loadSong(songs[songIndex])

// update song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/lily.mp3`
    cover.src = `images/mtp.png`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i').classList.remove('fa-play')
    playBtn.querySelector('i').classList.add('fa-pause')
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i').classList.add('fa-play')
    playBtn.querySelector('i').classList.remove('fa-pause')
    audio.pause()
}

// 更新進度條的函數
function updateProgress(e){
    // 從事件對象中提取音樂的持續時間和當前時間
    const {duration, currentTime} = e.srcElement
    // 計算播放進度的百分比
    const progressPervent = (currentTime / duration) * 100
    // 將計算的百分比應用到進度條的寬度上
    progress.style.width = `${progressPervent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

// Event listeners
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }

})

// 監聽音樂的更新時間
audio.addEventListener('timeupdate',updateProgress)
 
// 監聽點擊進度條
progressContainer.addEventListener('click', setProgress)

