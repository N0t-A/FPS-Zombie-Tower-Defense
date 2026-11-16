import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GameUI, ResourceUI } from './ui';

const gameUI = new GameUI();

const resourceUI = new ResourceUI();

gameUI.setHealth(100);

const textureLoader = new THREE.TextureLoader();

const woodTexture = textureLoader.load('/textures/wood.jpg');

woodTexture.wrapS = THREE.RepeatWrapping;
woodTexture.wrapT = THREE.RepeatWrapping;

const metalTexture = textureLoader.load('/textures/metal.jpg');

metalTexture.wrapS = THREE.RepeatWrapping;
metalTexture.wrapT = THREE.RepeatWrapping;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.y = 1.6; // Approximate player eye height in meters

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

// 2. Environment (Floor & Reference Box)
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(50, 50),
  new THREE.MeshStandardMaterial({ color: 0x3b7a57 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const h1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({map: metalTexture})
);
h1.position.set(0, 1, -5);
scene.add(h1);

const h2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({map: metalTexture})
);
h2.position.set(2, 1, -5);
scene.add(h2);

const h3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({map: metalTexture})
);
h3.position.set(-2, 1, -5);
scene.add(h3);

const h4 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({map: metalTexture})
);
h4.position.set(-2, 1, -3);
scene.add(h4);

const t1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, .125, 2),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
t1.position.set(0, .75, -3);

const l1 = new THREE.Mesh(
  new THREE.BoxGeometry(.125, 1, .125),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
l1.position.set(0.438, 0.25, -3.938);

const l2 = new THREE.Mesh(
  new THREE.BoxGeometry(.125, 1, .125),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
l2.position.set(-.438, 0.25, -3.938);

const l3 = new THREE.Mesh(
  new THREE.BoxGeometry(.125, 1, .125),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
l3.position.set(0.438, 0.25, -2.063);

const l4 = new THREE.Mesh(
  new THREE.BoxGeometry(.125, 1, .125),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
l4.position.set(-.438, 0.25, -2.063);

const table = new THREE.Group();
table.add(t1);
table.add(l1);
table.add(l2);
table.add(l3);
table.add(l4);

scene.add(table);

const tl1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 4, 0.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
tl1.position.set(3, 2, 0);

const tl2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 4, 0.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
tl2.position.set(5, 2, 0);

const tl3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 4, 0.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
tl3.position.set(5, 2, 2);

const tl4 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 4, 0.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
tl4.position.set(3, 2, 2);

const cb1 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb1.position.set(4, 3, 2),
cb1.rotateZ(22.5);

const cb2 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb2.position.set(4, 3, 2),
cb2.rotateZ(-22.5);

const cb3 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb3.position.set(4, 3, 0),
cb3.rotateZ(22.5);

const cb4 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb4.position.set(4, 3, 0),
cb4.rotateZ(-22.5);

const cb5 = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb5.position.set(3, 3, 1),
cb5.rotateX(22.5);

const cb6 = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb6.position.set(3, 3, 1),
cb6.rotateX(-22.5);

const cb7 = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb7.position.set(5, 3, 1),
cb7.rotateX(22.5);

const cb8 = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb8.position.set(5, 3, 1),
cb8.rotateX(-22.5);

const cb9 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb9.position.set(4, 1, 2),
cb9.rotateZ(22.5);

const cb10= new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb10.position.set(4, 1, 2,),
cb10.rotateZ(-22.5,);

const cb11= new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb11.position.set(4, 1, 0),
cb11.rotateZ(22.5);

const cb12= new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.5, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb12.position.set(4, 1, 0),
cb12.rotateZ(-22.5);

const cb13= new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb13.position.set(3, 1, 1),
cb13.rotateX(22.5);

const cb14= new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb14.position.set(3, 1, 1),
cb14.rotateX(-22.5);

const cb15= new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
cb15.position.set(5, 1, 1),
cb15.rotateX(22.5);

const cb16= new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.5, 2.5),
 new THREE.MeshStandardMaterial({map: woodTexture})
);
cb16.position.set(5, 1, 1),
cb16.rotateX(-22.5);

const tt = new THREE.Mesh(
  new THREE.BoxGeometry(3, 0.1, 3),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
tt.position.set(4, 4, 1);

const ls1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 4, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
ls1.position.set(3.5, 2, 2.45);

const ls2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 4, 0.1),
    new THREE.MeshStandardMaterial({map: woodTexture})
);
ls2.position.set(4.5, 2, 2.45);

const lr1 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr1.position.set(4, 0, 2.45);

const lr2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr2.position.set(4, .5, 2.45)

const lr3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr3.position.set(4, 1, 2.45)

const lr4 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr4.position.set(4, 1.5, 2.45)

const lr5 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);;
lr5.position.set(4, 2, 2.45);

const lr6 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr6.position.set(4, 2.5, 2.45);

const lr7 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr7.position.set(4, 3, 2.45);

const lr8 = new THREE.Mesh(
  new THREE.BoxGeometry(1.125, 0.1, 0.1),
  new THREE.MeshStandardMaterial({map: woodTexture})
);
lr8.position.set(4, 3.5, 2.45);

const tower_base = new THREE.Group();
tower_base.add(tl1);
tower_base.add(tl2);
tower_base.add(tl3);
tower_base.add(tl3);
tower_base.add(tl4);
tower_base.add(cb1);
tower_base.add(cb2);
tower_base.add(cb3);
tower_base.add(cb4);
tower_base.add(cb5);
tower_base.add(cb6);
tower_base.add(cb7);
tower_base.add(cb8);
tower_base.add(cb9);
tower_base.add(cb10);
tower_base.add(cb11);
tower_base.add(cb12);
tower_base.add(cb13);
tower_base.add(cb14);
tower_base.add(cb15);
tower_base.add(cb16);
tower_base.add(tt);
tower_base.add(ls1);
tower_base.add(ls2);
tower_base.add(lr1);
tower_base.add(lr2);
tower_base.add(lr3);
tower_base.add(lr4);
tower_base.add(lr5);
tower_base.add(lr6);
tower_base.add(lr7);
tower_base.add(lr8);
scene.add(tower_base);

const collidableObjects: THREE.Object3D[] = [
  h1, h2, h3, h4,
  ...table.children.filter(object => object !== t1),
  ...tower_base.children.filter(object => object !== tt)
];

scene.updateMatrixWorld(true);

const collisionBoxes = collidableObjects.map((object) => {
  return new THREE.Box3().setFromObject(object);
});

const platformBoxes = [
  ...collisionBoxes,
  new THREE.Box3().setFromObject(t1),
  new THREE.Box3().setFromObject(tt)
];

const PLAYER_RADIUS = 0.35;
const PLAYER_HEIGHT = 1.8;
const PLAYER_EYE_HEIGHT = 1.6;

function checkPlayerCollision(): boolean {
  const playerBox = new THREE.Box3().setFromCenterAndSize(
    new THREE.Vector3(
      camera.position.x,
      camera.position.y - PLAYER_EYE_HEIGHT + PLAYER_HEIGHT / 2,
      camera.position.z
    ),
    new THREE.Vector3(
      PLAYER_RADIUS * 2,
      PLAYER_HEIGHT,
      PLAYER_RADIUS * 2
    )
  );

  return collisionBoxes.some((box) => box.intersectsBox(playerBox));
}

function moveWithCollision(move: () => void) {
  const previousPosition = camera.position.clone();

  move();

  if (checkPlayerCollision()) {
    camera.position.copy(previousPosition);
  }
}

// Ladder Detection

const ladder = new THREE.Box3(
  new THREE.Vector3(3.4, 0, 2.25),
  new THREE.Vector3(4.6, 4, 2.8)
);

// Check if player is touching the ladder
function isTouchingLadder(): boolean {
  const playerPosition = camera.position;

  return (
    playerPosition.x + PLAYER_RADIUS > ladder.min.x &&
    playerPosition.x - PLAYER_RADIUS < ladder.max.x &&
    playerPosition.y > ladder.min.y &&
    playerPosition.y - PLAYER_EYE_HEIGHT < ladder.max.y &&
    playerPosition.z + PLAYER_RADIUS > ladder.min.z &&
    playerPosition.z - PLAYER_RADIUS < ladder.max.z
  );
}

const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(10, 20, 10);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.4));

// 3. First-Person Controls
const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => {
  controls.lock();
});

// Track pressed keys
const keys: Record<string, boolean> = {};
document.addEventListener('keydown', (e) => (keys[e.code] = true));
document.addEventListener('keyup', (e) => (keys[e.code] = false));

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
const moveSpeed = 8.0;

const gravity = 20;
let verticalVelocity = 0;
const terminalVelocity = -30;
let isGrounded = false;

const GROUND_HEIGHT = 0;

const JUMP_FORCE = 8;

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

const previousPlayerBottom = camera.position.y - PLAYER_EYE_HEIGHT;

// Apply gravity
if (!isGrounded) {
  verticalVelocity -= gravity * delta;
  verticalVelocity = Math.max(verticalVelocity, terminalVelocity);
}

camera.position.y += verticalVelocity * delta;

const playerBottom = camera.position.y - PLAYER_EYE_HEIGHT;

// Check whether the player is above an object's top
const overlappingPlatforms = platformBoxes.filter(box => {
  return (
    camera.position.x + PLAYER_RADIUS > box.min.x &&
    camera.position.x - PLAYER_RADIUS < box.max.x &&
    camera.position.z + PLAYER_RADIUS > box.min.z &&
    camera.position.z - PLAYER_RADIUS < box.max.z
  );
});

// Check whether the player has landed on an object
let landedOnPlatform = false;

for (const box of overlappingPlatforms) {
  if (
    previousPlayerBottom >= box.max.y &&
    playerBottom <= box.max.y
  ) {
    if (
      !landedOnPlatform ||
      box.max.y > camera.position.y - PLAYER_EYE_HEIGHT
    ) {
      camera.position.y = box.max.y + PLAYER_EYE_HEIGHT;
      verticalVelocity = 0;
      isGrounded = true;
      landedOnPlatform = true;
    }
  }
}

// Check whether the player is still standing on a platform
if (!landedOnPlatform) {
  const standingOnPlatform = overlappingPlatforms.some(box =>
    Math.abs(playerBottom - box.max.y) < 0.05
  );

  if (standingOnPlatform) {
    verticalVelocity = 0;
    isGrounded = true;
  } else if (playerBottom <= GROUND_HEIGHT) {
    camera.position.y = GROUND_HEIGHT + PLAYER_EYE_HEIGHT;
    verticalVelocity = 0;
    isGrounded = true;
  } else {
    isGrounded = false;
  }
}

if (controls.isLocked) {
  const movingForward = keys['KeyW'] || keys['ArrowUp'];
  const movingBackward = keys['KeyS'] || keys['ArrowDown'];
  const movingRight = keys['KeyD'] || keys['ArrowRight'];
  const movingLeft = keys['KeyA'] || keys['ArrowLeft'];
  const jumping = keys['Space'];

  const touchingLadder = isTouchingLadder();

  // Jump
  if (jumping && isGrounded && !touchingLadder) {
    verticalVelocity = JUMP_FORCE;
    isGrounded = false;
  }

  // Ladder climbing
  if (touchingLadder && movingForward) {
    camera.position.y += (moveSpeed * 1.25) * delta;
    verticalVelocity = 0;
    isGrounded = false;
  }
  else if (movingForward) {
    moveWithCollision(() => controls.moveForward(moveSpeed * delta));
  }

  if (movingBackward) {
    moveWithCollision(() => controls.moveForward(-moveSpeed * delta));
  }

  if (movingRight) {
    moveWithCollision(() => controls.moveRight(moveSpeed * delta));
  }

  if (movingLeft) {
    moveWithCollision(() => controls.moveRight(-moveSpeed * delta));
  }
}

  renderer.render(scene, camera);
}

animate();
