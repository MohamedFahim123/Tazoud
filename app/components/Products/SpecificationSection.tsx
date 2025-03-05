const SpecificationSection = () => {
  return (
    <div className="mx-auto w-full bg-white shadow-sm rounded-sm">
      <p className="text-black/60 mb-4 w-full">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly
        believable. If you care going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray">
          <tbody>
            <tr className="border border-gray">
              <td className="px-4 py-2 font-semibold">Package Dimensions</td>
              <td className="px-4 py-2 border-l border-gray">44 x 32 x 4 cm, 560 Grams</td>
            </tr>
            <tr className="border border-gray">
              <td className="px-4 py-2 font-semibold">Manufacturer</td>
              <td className="px-4 py-2 border-l border-gray">Badgley Mischka</td>
            </tr>
            <tr className="border border-gray">
              <td className="px-4 py-2 font-semibold">Product Part Number</td>
              <td className="px-4 py-2 border-l border-gray">JKGHNBKJG-MN563205</td>
            </tr>
            <tr className="border border-gray">
              <td className="px-4 py-2 font-semibold">Best Sellers Rank</td>
              <td className="px-4 py-2 border-l border-gray">#561 in Clothing and Accessories</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Customer Reviews</td>
              <td className="px-4 py-2 border-l border-gray">
                <span className="text-yellow">★★★★☆</span> 2,580 Ratings
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecificationSection;
