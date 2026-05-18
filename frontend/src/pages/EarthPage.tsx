import HousePage from "@/components/HousePage";

export default function EarthPage() {
  return (
    <HousePage
      bgImage="/bg-earth.png"
      houseImage="/house-with-balloon.png"
      houseAlt="풍선 달린 집"
      showArrow={false}
      bgStyle={{ transform: "translateY(0%)", height: "100%" }}
      houseStyle={{ width: "60vw", transform: "translateX(-50%) translateY(15%)" }}
      questionPadding="pt-[2vh]"
      scrollHeight="h-[100vh]"
    />
  );
}
