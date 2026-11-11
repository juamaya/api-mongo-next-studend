import Show from "@/components/Show";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center bg-blue-400 mt-13 min-h-screen">
        <div className="w-full max-w-6xl px-5">
          <Image
            className="p-10"
            src="/next.svg"
            alt="Next.js logo"
            width={300}
            height={100}
            priority
          />

          <h1 className="text-4xl font-bold mb-5">Crud Next Mongo App</h1>

          <Show />
        </div>
      </main>
    </div>
  );
}
