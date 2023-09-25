/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Statistics = () => {
  const [donationData, setDonationData] = useState([]);
  const totalDonations = 12;

  useEffect(() => {
    const donationCategory = JSON.parse(localStorage.getItem("donation"));
    if (donationCategory) {
      setDonationData(donationCategory);
    }
  }, []);

  const selectedDonations = donationData.length;
  const remainingDonations = totalDonations - selectedDonations;

  const data = [
      { name: "Total Donation", value: remainingDonations },
    { name: "Your Donation", value: selectedDonations },
  ];

  const COLORS = ["#FF444A", "#00C49F"];  

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="pt-60 flex justify-center text-xl">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cy="50%"
          cx="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
