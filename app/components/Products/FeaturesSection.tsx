const FeaturesSection = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-sm rounded-sm">
      <ul className="list-disc list-inside text-black/60 space-y-4">
        <li>
          <strong className="text-black">Fiber or filament:</strong> type, size, length
        </li>
        <li>
          <strong className="text-black">Yarn:</strong> diameter, twist, weight or size, count, fiber content for mixed yarns, ply
        </li>
        <li>
          <strong className="text-black">Weight:</strong> ounces per squared or yards per pound
        </li>
        <li>
          <strong className="text-black">Thickness:</strong> vertical depth
        </li>
        <li>
          <strong className="text-black">Fabric structure</strong>
        </li>
        <li>
          <strong className="text-black">Woven fabrics:</strong> weave type, warp and filling yarn count per linear inch
        </li>
        <li>
          <strong className="text-black">Knitted fabric:</strong> knit type, wale and course count per inch
        </li>
        <li>
          <strong className="text-black">Finishes:</strong> chemicals such as resins, starches, waxes and mechanical effects
        </li>
        <li>
          <strong className="text-black">Fabric width:</strong> The length of the filling or course
        </li>
      </ul>
    </div>
  );
};

export default FeaturesSection;
