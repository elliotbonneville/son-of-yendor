const files = [
    'src/main.js',
    'src/math2.js',
    'src/renderer.js',
    'src/input.js',
    'src/map.js',
    'src/GameObject.js',
    'src/Component.js',
    'src/Tile.js',
    'src/Level.js',
    'src/Actor.js',
];

files.forEach(path => {
    const scriptNode = document.createElement('script');
    scriptNode.src = path;
    document.body.appendChild(scriptNode);
});
