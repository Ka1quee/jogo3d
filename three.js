var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, windo.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGemeotry()
var material = new THREE.MeshBasicMaterial({color: 0x00ff00} );
var cube = new THREE.Mesh(geometry.material);
scene.add(cube);