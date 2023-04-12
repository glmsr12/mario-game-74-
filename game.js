kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

loadRoot('./images/');
loadSprite('coin', '');
loadSprite('evil-shroom', '');
loadSprite('brick', 'brick.png');
loadSprite('block', '');
loadSprite('mario', '');
loadSprite('mushroom', '');
loadSprite('suprise', '');
loadSprite('unboxed', '');
loadSprite('pipe-top-left', '');
loadSprite('pipe-top-right', '');
loadSprite('pipe-bottom-left', '');
loadSprite('pipe-bottom-right', '');

scene('game', () => {
  layers(['bg', 'obj', 'ui'], 'obj');

  const map = [
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',
    '                                         ',

    '=============================    ========',
  ];

  const levelConfig = {
    width: 20,
    height: 20,
    '=': [sprite('block', solid())],
  };

  const gameLevel = addLevel(map, levelConfig);
});
