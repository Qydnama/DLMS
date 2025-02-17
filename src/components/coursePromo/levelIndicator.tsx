export const LevelIndicator = ({ level }: { level: string }) => {
    let bars = [];
  
    switch (level.toLowerCase()) {
      case "beginner":
        bars = [true, false, false];
        break;
      case "intermediate":
        bars = [true, true, false];
        break;
      case "expert":
        bars = [true, true, true];
        break;
      default:
        bars = [true, false, false];
    }
  
    return (
      <div className="flex items-center space-x-2 text-gray-700 font-medium">
        <div className="flex space-x-[2px]">
          {bars.map((active, index) => (
            <div
              key={index}
              className={`w-[4px] h-4 rounded-sm ${
                active ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <span><span className="font-semibold">{level}</span> Level</span>
      </div>
    );
};
  