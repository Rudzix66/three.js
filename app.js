let camera, scene, renderer, cube, cube2;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);


	renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

 	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( {color: "0xfff"} );

	const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
	const material2 = new THREE.MeshBasicMaterial( {color: "0x26D21A"} );

 	cube = new THREE.Mesh( geometry, material );
	cube2 = new THREE.Mesh( geometry2, material2 );

	scene.add(cube);
	scene.add(cube2);

	camera.position.z = 5;

	cube.position.x = 0;
	cube2.position.x = 2;
}
init();

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	cube.rotation.x = -0
	cube.rotation.y = 200

	cube2.rotation.x = 0
	cube2.rotation.y = -200

	cube.position.x = -2;
	cube2.position.x = 2;
}
animate();

function onWindowResize() {
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);