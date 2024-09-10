
import Content from "./content/page";
import Player from "./player/page";


export default function Home() {
  return (
<section className="flex flex-col md:flex-row items-center justify-evenly gap-5 p-5 min-h-screen">
  <div className="">
    <Player />
  </div>
<div className="relative flex md:w-2/5 items-center justify-center bg-[#0f1220] rounded-md overflow-hidden">
  <div className="overflow-y-auto h-1/3">
    <Content />
  </div>
  <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#0f1220] to-transparent pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0f1220] to-transparent pointer-events-none"></div>
</div>

</section>

  );
}

