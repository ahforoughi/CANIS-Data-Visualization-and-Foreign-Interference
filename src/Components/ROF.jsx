import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { Switch, Space } from 'antd'

function ROFChart() {
    const [isChecked, setIsChecked] = useState(false);
    const [mapOption, setMapOption] = useState(null);
    const [barOption, setBarOption] = useState(null);
    const [myChart, setMyChart] = useState(null);

    useEffect(() => {
        var chartDom = document.getElementById('world-plot');
        var myChart = echarts.init(chartDom);
        setMyChart(myChart);

        var Map_PATH = '../../python_code/world.json';
        var DATA_PATH = '../../python_code/ROF.json';
        var data;
        fetch(DATA_PATH)
            .then((response) => response.json())
            .then((jsonData) => {
                data = jsonData["obj"];
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        myChart.showLoading();
        fetch(Map_PATH)
            .then((response) => response.json())
            .then((mapJson) => {
                myChart.hideLoading();
                echarts.registerMap('MAP', mapJson);

                const mapOption = {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return `${params.name}: ${params.value}`;
                        },
                    },
                    visualMap: {
                        left: 'right',
                        min: 0,
                        max: 100,
                        inRange: {
                            color: [
                                // '#313695',
                                // '#4575b4',
                                // '#74add1',
                                // '#abd9e9',
                                '#e0f3f8',
                                '#ffffbf',
                                '#fee090',
                                '#fdae61',
                                '#f46d43',
                                '#d73027',
                                '#a50026',
                            ],
                        },
                        text: ['High', 'Low'],
                        calculable: true,
                    },
                    series: [
                        {
                            id: 'ROF',
                            type: 'map',
                            roam: true,
                            map: 'MAP',
                            animationDurationUpdate: 1000,
                            universalTransition: true,
                            data: data,
                        },
                    ],
                };

                setMapOption(mapOption);

                data.sort(function (a, b) {
                    return a.value - b.value;
                });

                const barOption = {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return `${params.name}: ${params.value}`;
                        },
                    },
                    xAxis: {
                        type: 'value',
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            rotate: 30,
                        },
                        data: data.map(function (item) {
                            return item.name;
                        }),

                    },
                    animationDurationUpdate: 1000,
                    series: {
                        type: 'bar',
                        id: 'population',
                        data: data.map(function (item) {
                            return item.value;
                        }),
                        universalTransition: true
                    },
                };

                setBarOption(barOption);

                myChart.setOption(mapOption);
            });

        return () => {
            myChart.dispose();
        };
    }, []);

    useEffect(() => {
        if (myChart) {
            const option = isChecked ? barOption : mapOption;
            if (option) {
                myChart.setOption(option, true);
            }
        }
    }, [isChecked, mapOption, barOption, myChart]);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        console.log("here");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Switch
                unCheckedChildren="More Detail"
                checkedChildren="World Map"
                style={{ width: "12%", alignSelf: "center", color: "transparent" }}
                checked={isChecked}
                onChange={toggleSwitch}
            />
            <div id="world-plot" style={{ width: '100%', height: '600px' }}></div>
        </div>
    );
}

export default ROFChart;