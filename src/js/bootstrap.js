const files = [
    'src/main.js',
    'src/math2.js',
    'src/GameObject.js',
    'src/components/Component.js',
    'src/components/LocationComponent.js',
    'src/components/LocomotionComponent.js',
    'src/components/RendererComponent.js',
    'src/components/PlayerInputComponent.js',
    'src/components/ColliderComponent.js',
    'src/components/BodyComponent.js',
    'src/components/monsterIntelligenceComponents.js',
    'src/renderer.js',
    'src/input.js',
    'src/map.js',
    'src/Tile.js',
    'src/Level.js',
    'src/Actor.js',
    'src/Monster.js',
    'src/Player.js',
];

files.forEach(path => {
    const scriptNode = document.createElement('script');
    scriptNode.src = path;
    document.body.appendChild(scriptNode);
});
