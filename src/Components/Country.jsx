import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function WorldPie() {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        let option;

        myChart.showLoading();

        var Map_PATH = '../../python_code/world.json';
        var DATA_PATH = '../../python_code/country.json';
        var dataT;
        fetch(DATA_PATH)
            .then((response) => response.json())
            .then((jsonData) => {
                dataT = jsonData;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        fetch(Map_PATH)
            .then((response) => response.json())
            .then((mapJson) => {
                echarts.registerMap('MAP', mapJson);

                function randomPieSeries(center, radius, name) {
                    const data = dataT[name];
                    return {
                        type: 'pie',
                        coordinateSystem: 'geo',
                        tooltip: {
                            formatter: '{b}: {c} ({d}%)',
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        animationDuration: 0,
                        radius,
                        center,
                        data,
                    };
                }

                option = {
                    geo: {
                        map: 'MAP',
                        roam: true,
                        itemStyle: {
                            areaColor: '#e7e8ea',
                        },
                    },
                    tooltip: {},
                    legend: {},
                    series: [
                        randomPieSeries([-100, 39], 28, "USA"),
                        randomPieSeries([-110, 60], 28, "Canada"),
                        randomPieSeries([106, 62], 20, "Russia"),
                        randomPieSeries([134, -25], 28, "Australia"),
                        randomPieSeries([100, 34], 20, "China"),
                        randomPieSeries([136, 36], 10, "Japan"),
                        randomPieSeries([78, 23], 12, "India"),
                        randomPieSeries([-3.4, 53], 10, "UK"),
                        randomPieSeries([67, 29], 10, "Pakistan"),
                        randomPieSeries([53, 33], 10, "Iran"),
                        randomPieSeries([-51, -12], 15, "Brazil"),
                        randomPieSeries([10, 51], 10, "Germany"),
                    ],
                };

                myChart.hideLoading();
                myChart.setOption(option);
            });

        // Cleanup when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} style={{ width: '100%', height: '600px' }} />;
}

export default WorldPie;
