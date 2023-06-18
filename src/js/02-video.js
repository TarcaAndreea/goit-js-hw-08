import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//1*.Cite ste documentația pentru librăria player-ului Vimeo.
//2*.Adaugă biblioteca ca dependență de proiect prin npm.
//3*.Inițializează player-ul în fișierul script așa cum este descris în secțiunea pre-existing player, dar nu uita faptul că player-ul din proiect este adăugat ca pachet npm și nu printr-un CDN.
//4*.Citește documentația metodei on() și urmărește evenimentul de timeupdate folosind pentru a actualiza timpul de redare.
//5*.Salvează timpul de redare în local storage. "videoplayer-current-time" va fi cheia de stocare.
//6*.La reîncărcarea paginii, utilizează metoda setCurrentTime() pentru a relua redarea de la poziţia salvată.
//7*. la proiect librăria lodash.throttle și fă astfel încât timpul de redare să fie actualizat în spațiul de stocare nu mai mult de o dată pe secundă.
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');

  player.getVideoTitle().then(function (title) {
    console.log('title:', title);
  });
});
const onTimeupdate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
const timeStart = localStorage.getItem('videoplayer-current-time');

if (timeStart) {
  player
    .setCurrentTime(timeStart)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
