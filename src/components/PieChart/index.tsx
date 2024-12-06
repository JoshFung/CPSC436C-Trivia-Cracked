import { useMemo, useRef } from "react";
import CategoryColourEnum from "../../ts/enums/CategoryColourEnum";
import PieChartInterface from "../../ts/interfaces/PieChartInterface";
import styles from "./index.module.css";
import * as d3 from "d3";

const MARGIN_X = 150;
const MARGIN_Y = 20;
const INFLEXION_PADDING = 20;

export const PieChart: React.FC<PieChartInterface> = (props) => {
  const { width, height, data } = props;

  const ref = useRef<SVGGElement>(null);

  // calculate count of questions for each category
  const categoryCounts = data.reduce(
    (acc: { [key: string]: number }, entry) => {
      acc[entry.category] = (acc[entry.category] || 0) + 1;
      return acc;
    },
    {} as Record<keyof typeof CategoryColourEnum, number>
  );
  const result = Object.entries(categoryCounts).map(([category, value]) => ({
    category,
    value,
  }));

  // calculate radius for pie chart
  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  // generate arc coordinates
  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<{ category: string; value: number }>()
      .value((d) => d.value);
    return pieGenerator(result);
  }, [data]);

  // transform arc coordinates into svg paths
  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // arc for pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // arc for label inflexion point
    const inflexionInfo = {
      innerRadius: radius,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = grp.data.category + " (" + grp.value + ")";

    const category = grp.data.category as keyof typeof CategoryColourEnum;
    const fillColor = CategoryColourEnum[category];

    const labelColor = "#fcca46";

    return (
      <g
        key={i}
        className={styles.slice}
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add(styles.hasHighlight);
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
        }}
      >
        <path d={slicePath || undefined} fill={fillColor} />
        <circle cx={centroid[0]} cy={centroid[1]} r={3} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={labelColor}
          fill={labelColor}
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
          fill={labelColor}
        >
          {label}
        </text>
      </g>
    );
  });

  return (
    <div className={styles.pieChartContainer}>
      <svg width={width} height={height}>
        <text
          x={width / 2}
          y={MARGIN_Y + 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={24}
          fill="white"
          fontFamily="Plus Jakarta Sans"
        >
          Number of Questions per Category
        </text>
        <text
          x={width / 2}
          y={MARGIN_Y + 55}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={12}
          fill="#42858c"
          fontStyle="italic"
        >
          Hover over a slice to focus on a category
        </text>
        <g
          transform={`translate(${width / 2}, ${height / 2})`}
          className={styles.container}
          ref={ref}
        >
          {shapes}
        </g>
      </svg>
    </div>
  );
};
