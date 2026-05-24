export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center min-h-[60vh]
                     bg-[#f5f5f7] text-center px-6">
      <div>
        <p
          className="text-[#6e6e73] uppercase mb-4"
          style={{ fontSize: 12, letterSpacing: "0.1em" }}
        >
          Elegant Galaxy Pvt Ltd
        </p>
        <h1
          className="font-semibold text-[#1d1d1f]"
          style={{ fontSize: 48, lineHeight: 1.08, letterSpacing: "-0.003em" }}
        >
          Premium home appliances.
        </h1>
      </div>
    </main>
  );
}
