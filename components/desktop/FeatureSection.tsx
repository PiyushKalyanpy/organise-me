import featureData from "../../data/features.json";
import { FeatureItem } from "../exporter";

const FeatureSection = () => {
  console.log(featureData, "featureData");
  return (
    <div id="features" className="w-screen  overflow-hidden text-black bg-white px-60 items-center flex flex-col gap-12">
      <h2 className="flex flex-row w-fit m-auto text-4xl  font-bold ">Features</h2>
      <div className="flex flex-wrap gap-4 items-center place-content-center ">
        {featureData.map((feature, index) => {
        return <FeatureItem key={index} feature={feature.featureText} />;
      })}
      </div>
      
    </div>
  );
};

export default FeatureSection;
