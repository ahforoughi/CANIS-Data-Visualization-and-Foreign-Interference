import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function ScatterPlot() {
    useEffect(() => {

        const fetchData = async () => {
            const DATA_PATH = '../../python_code/scatter.json';
            try {
                const response = await fetch(DATA_PATH);
                const jsonData = await response.json();
                return jsonData["obj"];
            } catch (error) {
                console.error('Error fetching data:', error);
                return []; // Return an empty array if there's an error
            }
        };

        const initializeChart = async () => {
            const chartDom = document.getElementById('scatter-plot');
            const myChart = echarts.init(chartDom);
            const data = await fetchData();

            const country_names = ['Anglosphere', 'China', 'la Francophonie', 'USA', 'Shanghai', 'MENA', 'Pakistan', 'Japan', 'South Korea', 'Jiangsu', 'India', 'Hispanophone', 'Chongqing', 'Hong Kong', 'Hainan', 'Brazil', 'Iran', 'Hunan', 'Türkiye', 'Henan', 'Xinjiang', 'African Union', 'Myanmar', 'Egypt', 'Afghanistan'];
            const Medias = ['Twitter', 'Facebook', 'Instagram', 'Threads', 'YouTube', 'TikTok'];

            const title = [];
            const singleAxis = [];
            const series = Medias.map((day, idx) => {
                title.push({
                    textBaseline: 'middle',
                    top: ((idx + 0.5) * 100) / 6 + '%',
                    text: day
                });

                singleAxis.push({
                    left: 150,
                    type: 'category',
                    boundaryGap: false,
                    data: country_names,
                    top: (idx * 100) / 6 + 6 + '%',
                    height: 100 / 6 - 10 + '%',
                    axisLabel: {
                        interval: 0,
                        rotate: 25,
                        fontSize: 10,
                    }
                });

                return {
                    singleAxisIndex: idx,
                    coordinateSystem: 'singleAxis',
                    type: 'scatter',
                    data: [],
                    symbolSize: function (dataItem) {
                        return dataItem[1] * 4;
                    }
                };
            });

            data.forEach(dataItem => {
                series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
            });

            const option = {
                tooltip: {
                    position: 'top',
                    formatter: function (params) {
                        const media = Medias[params.seriesIndex];
                        const coutnry = country_names[params.data[0]];
                        const value = params.data[1];
                        return `${coutnry} ${value}`;
                    }
                },
                title: title,
                singleAxis: singleAxis,
                series: series
            };

            myChart.setOption(option);

            return () => {
                myChart.dispose();
            };
        };

        initializeChart();
    }, []);

    return <div id="scatter-plot" style={{ width: '100%', height: '600px' }}></div>;
};

export default ScatterPlot;
