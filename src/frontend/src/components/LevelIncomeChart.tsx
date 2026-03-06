import { miningHubPlan } from "@/content/mininghubPlan";

export function LevelIncomeChart() {
  // Extended level income data to 10 levels as per requirements
  const levelData = [
    { level: 1, percentage: 7, color: "bg-level-1" },
    { level: 2, percentage: 5, color: "bg-level-2" },
    { level: 3, percentage: 1, color: "bg-level-3" },
    { level: 4, percentage: 1, color: "bg-level-4" },
    { level: 5, percentage: 1, color: "bg-level-5" },
    { level: 6, percentage: 1, color: "bg-level-6" },
    { level: 7, percentage: 1, color: "bg-level-7" },
    { level: 8, percentage: 1, color: "bg-level-8" },
    { level: 9, percentage: 1, color: "bg-level-9" },
    { level: 10, percentage: 1, color: "bg-level-10" },
  ];

  const maxPercentage = Math.max(...levelData.map((d) => d.percentage));

  return (
    <div className="space-y-6">
      {/* Bar Chart */}
      <div className="space-y-3">
        {levelData.map((data, index) => {
          const heightPercentage = (data.percentage / maxPercentage) * 100;

          return (
            <div
              key={data.level}
              className="flex items-center gap-4 animate-bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Level Label */}
              <div className="w-24 text-sm font-semibold text-rainbow">
                लेवल {data.level}
              </div>

              {/* Bar Container */}
              <div className="flex-1 relative h-12 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg overflow-hidden border-2 animate-rainbow-border">
                {/* Animated Bar */}
                <div
                  className={`h-full ${data.color} animate-level-bar-grow relative overflow-hidden`}
                  style={{
                    width: `${heightPercentage}%`,
                    animationDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 animate-rainbow-glow opacity-50" />
                </div>

                {/* Percentage Label */}
                <div className="absolute inset-0 flex items-center justify-end pr-4">
                  <span className="text-sm font-bold text-foreground text-rainbow">
                    {data.percentage}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t-2 animate-rainbow-border">
        {levelData.map((data, index) => (
          <div
            key={data.level}
            className="flex items-center gap-2 animate-bounce-in"
            style={{ animationDelay: `${1000 + index * 50}ms` }}
          >
            <div
              className={`w-4 h-4 rounded ${data.color} animate-scale-pulse`}
            />
            <span className="text-xs text-muted-foreground">L{data.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
