import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayr-current-time';

const inframe = document.querySelector('iframe');
const player = new Player(inframe);

player.on('timeupdate', throttle(timeUpDate, 1000));

function timeUpDate() {
  player.getCurrentTime().then(sec => {
    console.log(sec);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sec));
  });
}

const timeToStart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0;
console.log(timeToStart);
player.setCurrentTime(timeToStart);
