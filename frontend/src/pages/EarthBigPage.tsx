import HousePage from "@/components/HousePage";

export default function EarthBigPage() {
  return (
    <HousePage
      bgImage="/bg-earth.png"
      houseImage="/house-with-big-balloon.png"
      houseAlt="큰 풍선 달린 집"
      showArrow={false}
      bgStyle={{ transform: "translateY(0%)", height: "100%" }}
      houseStyle={{ width: "100vw", transform: "translateX(-50%) translateY(5%) rotate(5deg)" }}
      questionPadding="pt-[2vh]"
      scrollHeight="h-[100vh]"
    />
  );
}
