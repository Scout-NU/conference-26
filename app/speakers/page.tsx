import Speaker from "../components/speaker";

export default function Speakers() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Speaker
        img=""
        name="Name"
        title="TITLE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, 
        vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque 
        commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, 
        turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio."
        link1=""
        link2=""
      />
    </div>
  );
}
