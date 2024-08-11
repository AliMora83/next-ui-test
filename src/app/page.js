
import Content from "./content/page";
import Player from "./player/page";


export default function Home() {
  return (
<section className="flex flex-col md:flex-row items-center justify-evenly h-screen gap-5 p-5">
  <div className="">
    <Player />
  </div>
  <div className="flex md:w-2/5 items-center justify-center bg-background rounded-md">
    <Content />
  </div>
</section>

  );
}

