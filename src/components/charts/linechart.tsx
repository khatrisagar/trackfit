import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Svg, {Line, Path, Circle, Text as SvgText} from 'react-native-svg';
import {rootStyles} from '../../styles/global.style';

const LineChart: React.FC = () => {
  const chartData = {
    chart: {
      width: Dimensions.get('window').width - 40, // Adjusted width with padding
      height: 300, // Example height
      padding: 30,
      backGroundColor: '#000000',
    },
    title: {
      enabled: true,
      text: 'Line Charttttttt',
    },
    xAxis: {
      label: {
        enabled: true,
        color: '#ffffff',
      },
    },
    yAxis: {
      label: {
        enabled: true,
        color: '#ffffff',
      },
      grid: {
        enabled: true,
        color: '#dadada55',
      },
    },
    legend: {
      enabled: true,
    },
    series: {
      color: rootStyles.themeColor,
      name: 'weightData',
      data: [
        {label: 'Jan', value: 30},
        {label: 'Feb', value: 45},
        {label: 'Mar', value: 28},
        {label: 'Apr', value: 60},
        {label: 'May', value: 50},
        {label: 'Jun', value: 40},
        {label: 'July', value: 150},
      ],
    },
  };

  const data = chartData.series.data;
  const padding = chartData.chart.padding;
  const chartWidth = chartData.chart.width - 3 * padding;
  const chartHeight = chartData.chart.height - 2 * padding;
  const pointSpacing = chartWidth / (data.length - 1);
  const maxValue = Math.max(...data.map(item => item.value));
  const [isSeriesVisible, setIsSeriesVisible] = useState(true);

  const pathRef = useRef<Path>(null);
  const [linePath, setLinePath] = useState<string>('');

  useEffect(() => {
    const generatedLinePath = data
      .map((item, index) => {
        const x = padding + index * pointSpacing;
        const y = padding + chartHeight - (item.value / maxValue) * chartHeight;
        return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
      })
      .join(' ');
    setLinePath(generatedLinePath);
    /* eslint-disable-next-line */
  }, [chartData.series.data]);

  const toggleSeries = () => {
    setIsSeriesVisible(!isSeriesVisible);
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: chartData.chart.backGroundColor,
        padding: chartData.chart.padding,
        // width:{chartData.chart.width - padding - 20},
        // height:{chartData.chart.height}
      }}>
      {chartData.title.enabled && (
        <Text style={styles.title}>{chartData.title.text}</Text>
      )}
      <Svg
        width={chartData.chart.width - padding}
        height={chartData.chart.height}>
        {/* Y-axis grid lines and labels */}
        {[...Array(6)].map((_, i) => {
          const yValue = maxValue * (i / 5);
          const yPosition =
            padding + chartHeight - (yValue / maxValue) * chartHeight;
          return (
            <React.Fragment key={i}>
              {chartData.yAxis.grid.enabled && (
                <Line
                  x1={padding}
                  x2={chartWidth + padding * 1.5}
                  y1={yPosition}
                  y2={yPosition}
                  stroke={chartData.yAxis.grid.color || '#ccc'}
                />
              )}
              {chartData.yAxis.label.enabled && (
                <SvgText
                  x={padding - 10}
                  y={yPosition + 5}
                  fontSize="10"
                  textAnchor="end"
                  fill={chartData.yAxis.label.color || '#ffffff'}>
                  {yValue.toFixed(0)}
                </SvgText>
              )}
            </React.Fragment>
          );
        })}

        {/* X-axis labels */}
        {chartData.xAxis.label.enabled &&
          data.map((item, index) => {
            const x = padding + index * pointSpacing;
            return (
              <SvgText
                key={index}
                x={x}
                y={chartHeight + padding + 20}
                fontSize="10"
                textAnchor="middle"
                fill={chartData.xAxis.label.color || '#ffffff'}>
                {item.label}
              </SvgText>
            );
          })}

        {/* Line chart */}
        {isSeriesVisible && (
          <Path
            ref={pathRef}
            d={linePath}
            fill="none"
            stroke={chartData.series.color || '#3498db'}
            strokeWidth="2"
          />
        )}

        {/* Circles at data points */}
        {isSeriesVisible &&
          data.map((item, index) => {
            const x = padding + index * pointSpacing;
            const y =
              padding + chartHeight - (item.value / maxValue) * chartHeight;
            return (
              <Circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={chartData.series.color || '#3498db'}
              />
            );
          })}
      </Svg>

      {chartData.legend.enabled && (
        <View
          style={[styles.legend, !isSeriesVisible && styles.legendItemHidden]}>
          <TouchableOpacity style={styles.legendItem} onPress={toggleSeries}>
            <View
              style={[
                styles.legendColor,
                {backgroundColor: chartData.series.color || '#3498db'},
              ]}
            />
            <Text>Sales</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  legendItem: {
    color: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  legendTextHidden: {
    textDecorationLine: 'line-through',
  },
  legendItemHidden: {
    opacity: 0.5, // Optional: decrease opacity to indicate it's disabled
  },
});

export default LineChart;
