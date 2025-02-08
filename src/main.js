import * as THREE from 'three'
import "./style.css"


// Scene 
const scene = new THREE.Scene()

// Red cube
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
const blocks = []
for (let i = 0; i < colors.length; i++) {
  blocks.push(new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: colors[i]
    })
  ))
}

for (let i of blocks) {
  scene.add(i)
}

for (let i = 1; i < 3; i++) {
  blocks[i].position.x = blocks[i - 1].position.x + (blocks[i - 1].geometry.parameters.width / 2) + (blocks[i].geometry.parameters.width / 2)
}

blocks[3].position.y = blocks[2].position.y + (blocks[2].geometry.parameters.height / 2) + (blocks[3].geometry.parameters.height / 2)
blocks[3].position.x = 0.5

blocks[4].position.x = 1.5
blocks[4].position.y = blocks[1].position.y + (blocks[1].geometry.parameters.height / 2) + (blocks[4].geometry.parameters.height / 2)

blocks[5].position.y = blocks[3].position.y + (blocks[3].geometry.parameters.height / 2) + (blocks[5].geometry.parameters.height / 2)

console.log(blocks[3].position)
console.log(blocks[4].position)
blocks[5].position.x = 1



for (let i = 0; i < blocks.length; i++) {
  blocks[i].rotation.y = Math.PI * 0.25
}
// Position

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 'red' })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// mesh.position.set(1, 0.5, 1)

// mesh.scale.x = 0.5
// mesh.scale.y = 0.75
// mesh.scale.z = 0.5
// mesh.scale.set(1, 2, 1)

// mesh.rotation.z  = Math.PI * 0.25

// mesh.scale.set(2, 0.5, 0.5)
// scene.add(mesh)

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// axesHelper.position.x = Math.PI /2

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('#webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)