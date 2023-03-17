kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

loadRoot('https://i.imgur.com/');
loadSprite('coin', 'wbKxhcd.png');
loadSprite('evil-shroom', 'KP03fR9.png');
loadSprite('brick', 'pogC0x5.png');

scene('game', () => {
  layers(['bg', 'obj', 'ui'], 'obj');
});
