import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function GraphChart() {
    useEffect(() => {
        var DATA_PATH = '../../python_code/graph_network_20.json';
        const chartDom = document.getElementById('graph-plot');
        const myChart = echarts.init(chartDom);

        myChart.showLoading();

        fetch(DATA_PATH)
            .then(response => response.json())
            .then(graph => {
                console.log(graph);
                myChart.hideLoading();

                const option = {
                    tooltip: {},
                    legend: [
                        {
                            data: graph.categories.map(a => a.name)
                        }
                    ],
                    series: [
                        {
                            name: 'Graph Chart',
                            type: 'graph',
                            layout: 'none',
                            data: graph.nodes,
                            links: graph.links,
                            categories: graph.categories,
                            roam: true,
                            label: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            },
                            labelLayout: {
                                hideOverlap: true
                            },
                            scaleLimit: {
                                min: 0.4,
                                max: 2
                            },
                            lineStyle: {
                                color: 'source',
                                curveness: 0.3
                            }
                        }
                    ]
                };

                console.log(option);
                myChart.setOption(option);
                console.log(myChart);
            });

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div id="graph-plot" style={{ width: '100%', height: '600px' }}></div>;
}

export default GraphChart;
