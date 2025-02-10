import React, { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { motion } from "framer-motion";

const LeetCodeHeatmap = ({ username }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const result = await response.json();

        if (result.status === "success" && result.submissionCalendar) {
          const formattedData = Object.entries(result.submissionCalendar).map(
            ([timestamp, count]) => ({
              date: new Date(parseInt(timestamp, 10) * 1000)
                .toISOString()
                .split("T")[0],
              count: count,
            })
          );
          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchLeetCodeData();
  }, [username]);

  const endDate = new Date(); // Today
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 365); // Last 365 days

  return (
    <>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        LeetCode Contributions Heatmap
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          margin: "20px auto",
          padding: "20px",
          maxWidth: "900px",
          backgroundColor: "#1a1a2e",
          color: "#e5e5e5",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          fontFamily: '"Inter", sans-serif',
          overflowX: "auto", // Enable horizontal scrolling for mobile
          whiteSpace: "nowrap", // Prevent wrapping
        }}
      >
        <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
          <HeatMap
            value={data}
            width={800}
            startDate={startDate}
            endDate={endDate}
            rectSize={12}
            legendCellSize={0} // No built-in legend
            space={4}
            rectProps={{ rx: 4 }}
            panelColors={{
              0: "#e0e0e0",
              1: "#c6e48b",
              5: "#7bc96f",
              10: "#239a3b",
              15: "#196127",
            }}
            monthLabels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            weekLabels={[]} // No week labels
            style={{ color: "#e5e5e5" }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default LeetCodeHeatmap;
