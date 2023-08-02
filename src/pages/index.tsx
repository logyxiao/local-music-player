import BgPlayer from "@/components/BgPlayer";
import MusicView from "@/components/MusicView";
import { memo } from "react";

const Index = memo(() => {
  return (
    <div>
      <BgPlayer />
      <MusicView />
    </div>
  );
});

export default Index;
