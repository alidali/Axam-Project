import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Card,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  useTheme,
  Box,
} from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { H4 } from "components/Typography";
import dynamic from "next/dynamic";
import { useState } from "react";
import { analyticsChartOptions } from "./chartsOptions";

// apext chart instance
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const categories = [
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
];

// styled component
const StyledSelect = styled(Select)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.grey[600],
  "& fieldset": { border: "0 !important" },
  "& .MuiSelect-select": { padding: 0, paddingRight: "8px !important" },
}));

const Analytics = () => {
  const theme = useTheme();
  const [selectType, setSelectType] = useState("yearly");

  const series = [
    {
      name: "Sales",
      data: [
        15000, 45000, 12000, 50000, 75000, 13000, 30000, 99000, 75000, 90000,
        55000, 15000,
      ],
    },
    {
      name: "Expense",
      data: [
        1500, 48000, 19000, 59000, 25000, 9000, 36000, 9000, 79000, 70000,
        57000, 5000,
      ],
    },
  ];

  return (
   
    <Card sx={{
      pr:2,
      width:"100%",
      height: "100%",}}>   
      <FlexBetween>
        <H4    color="#2B3445" style={{ alignItems: 'flex-end'}}>Analytics</H4>

        <StyledSelect
       
       style={{ alignItems: 'flex-end'}}
          value={selectType}
          IconComponent={() => <KeyboardArrowDown />}
          onChange={(e: SelectChangeEvent<string>) =>
            setSelectType(e.target.value)

          }
          
        >
          <MenuItem value="yearly">Yearly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="Weekily">Weekily</MenuItem>
        </StyledSelect>
        </FlexBetween>

      <ReactApexChart
        type="bar"
        height={400}
        series={series}
        options={analyticsChartOptions(theme, categories)}
        />
    </Card>
       
  );
};

export default Analytics;
