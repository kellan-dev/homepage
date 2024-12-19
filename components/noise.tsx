export default function Noise() {
  return (
    <div
      style={{ backgroundImage: "url(/noise.png)" }}
      className="pointer-events-none absolute inset-0 bg-[size:180px] bg-repeat opacity-[0.035] [z-index:-1] dark:opacity-[0.015]"
    ></div>
  );
}
