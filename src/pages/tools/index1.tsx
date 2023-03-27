import { onMount } from "solid-js";
import * as THREE from 'three';

export default () => {
  onMount(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // 2. Create a 3D object and add it to the scene
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // 3. Set the initial position of the camera
    camera.position.z = 5;

    // 4. Define the render function
    function render() {
      requestAnimationFrame( render );

      // Rotate the cube around its x, y, and z axes
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      // Render the scene
      renderer.render( scene, camera );
    }
    render();
    console.log(document)
  })
  return 1111
}