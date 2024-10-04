import MainPoster from "./components";

export default function Home() {
  return (
    <div
      className="max:w-md h-[932px] main"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?q=80&w=3334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <MainPoster />
    </div>
  );
}
