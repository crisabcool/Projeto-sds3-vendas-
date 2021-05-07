import Chart from "react-apexcharts";

const DonutChart = () => {

    const mockData = {
        series: [217138, 319928, 344867, 220426, 333088, 499001],
        labels: ['Fernando', 'Catharina', 'Manuelle', 'jorge', 'Simone', 'Cristiano']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;