export default function ParticlesBackground() {
  return (
    <div className="retro-world pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="retro-layer retro-sky-stars" />
      <div className="retro-layer retro-cloud retro-cloud-one" />
      <div className="retro-layer retro-cloud retro-cloud-two" />
      <div className="retro-layer retro-cloud retro-cloud-three" />
      <div className="retro-layer retro-mountains" />
      <div className="retro-layer retro-forest" />
      <div className="retro-layer retro-water" />

      <div className="retro-sprite retro-coin coin-one" />
      <div className="retro-sprite retro-coin coin-two" />
      <div className="retro-sprite retro-coin coin-three" />
      <div className="retro-sprite retro-ghost ghost-one" />
      <div className="retro-sprite retro-ghost ghost-two" />
    </div>
  );
}
