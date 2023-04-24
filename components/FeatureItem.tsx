const FeatureItem = ({feature} : any) => {
    return (
        <h3 className="flex  items-center flex-row bg-gray-100 rounded-2xl w-fit p-4 h-fit hover:bg-gray-200 hover:scale-[1.03] transition ">
           <p className="m-auto"> {feature}   </p>
        </h3>
    );
}

export default FeatureItem;