import React, { useEffect } from 'react'
import * as THREE from 'three';
import { Button } from '@material-ui/core';



const Globe = () => {
    useEffect(() => {
        init();
        animate();
    }, [])
    return (
        <div style={{ position: 'absolute', color: 'white', height: '100%', width: '100%' }
        }>
            <h1 style={{ fontSize: 124, marginBottom: 0 }}>ARverse</h1>
            <h2 style={{ fontSize: 37, marginTop: 0 }}>Create your own world.</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
                <Button size="large" style={{   backgroundColor: '#CBBED6' }}>enter</Button>
            </div>
        </div >
    )
}

var camera, scene, renderer;
var geometry, material, mesh;



function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.SphereGeometry(1, 32, 32);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 1
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame(animate);

    // mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.001;

    renderer.render(scene, camera);

}

export default Globe