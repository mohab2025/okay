import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { heroMotion } from '@/lib/heroMotion'

const vertexShader = `
  uniform float uTime;
  uniform float uProgress;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    float ripple = sin(position.y * 5.0 + uTime * 0.8) * 0.045 * (0.35 + uProgress);
    vec3 displaced = position + normal * ripple;
    vec4 world = modelMatrix * vec4(displaced, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform float uProgress;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 1.7);
    vec3 deep = vec3(0.04, 0.12, 0.10);
    vec3 mid = vec3(0.11, 0.30, 0.25);
    vec3 gold = vec3(0.784, 0.663, 0.42);
    vec3 color = mix(deep, mid, smoothstep(0.15, 0.85, fresnel));
    color = mix(color, gold, fresnel * (0.12 + uProgress * 0.62));
    float pulse = 0.5 + 0.5 * sin(uTime * 1.3 + vWorld.y * 2.5);
    color += gold * fresnel * pulse * 0.12;
    gl_FragColor = vec4(color, 0.78 + fresnel * 0.22);
  }
`

function Scene({ quality }: { quality: 'lite' | 'full' }) {
  const group = useRef<THREE.Group>(null)
  const wire = useRef<THREE.MeshBasicMaterial>(null)
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
        },
        vertexShader,
        fragmentShader,
      }),
    [],
  )

  const points = useMemo(() => {
    const count = quality === 'lite' ? 160 : 420
    const positions = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const radius = 1.7 + Math.random() * 1.35
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72
      positions[index * 3 + 2] = radius * Math.cos(phi)
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [quality])

  useEffect(() => {
    return () => {
      material.dispose()
      points.dispose()
    }
  }, [material, points])

  useFrame((_, delta) => {
    const progress = heroMotion.progress
    material.uniforms.uTime.value += delta
    material.uniforms.uProgress.value = THREE.MathUtils.damp(material.uniforms.uProgress.value, progress, 3.2, delta)
    if (group.current) {
      group.current.rotation.y += delta * (0.12 + progress * 0.28)
      group.current.rotation.x = Math.sin(material.uniforms.uTime.value * 0.18) * 0.12
      const scale = 0.94 + progress * 0.32
      group.current.scale.setScalar(scale)
    }
    if (wire.current) {
      const architecture = Math.max(0, 1 - Math.abs(progress - 0.46) * 2.1)
      wire.current.opacity = 0.08 + architecture * 0.55
    }
  })

  const detail = quality === 'lite' ? 1 : 2

  return (
    <group ref={group}>
      <mesh material={material}>
        <icosahedronGeometry args={[1.05, detail]} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshBasicMaterial color="#f5f4ef" toneMapped={false} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshBasicMaterial ref={wire} color="#c8a96b" wireframe transparent opacity={0.16} toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[1.72, 0.008, 12, 80]} />
        <meshBasicMaterial color="#c8a96b" transparent opacity={0.75} toneMapped={false} />
      </mesh>
      <mesh rotation={[1.1, 0.8, 0.4]}>
        <torusGeometry args={[2.05, 0.006, 12, 80]} />
        <meshBasicMaterial color="#f5f4ef" transparent opacity={0.35} toneMapped={false} />
      </mesh>
      {quality === 'full' ? (
        <mesh rotation={[0.4, 1.2, 0.2]}>
          <torusGeometry args={[2.35, 0.005, 12, 90]} />
          <meshBasicMaterial color="#1b5648" transparent opacity={0.85} toneMapped={false} />
        </mesh>
      ) : null}
      <points geometry={points}>
        <pointsMaterial color="#c8a96b" size={0.018} sizeAttenuation transparent opacity={0.7} toneMapped={false} />
      </points>
    </group>
  )
}

export default function DigitalCoreCanvas({ quality }: { quality: 'lite' | 'full' }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(Boolean(entry?.isIntersecting) && document.visibilityState === 'visible')
      },
      { threshold: 0.02 },
    )
    observer.observe(element)
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        setActive(false)
        return
      }
      const rect = element.getBoundingClientRect()
      setActive(rect.bottom > 0 && rect.top < window.innerHeight)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div ref={ref} className="core-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, quality === 'lite' ? 1.2 : 1.6]}
        camera={{ position: [0, 0.12, 5.6], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={active ? 'always' : 'never'}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Scene quality={quality} />
      </Canvas>
    </div>
  )
}
