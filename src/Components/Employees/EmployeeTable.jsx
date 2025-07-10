// EmployeeTable.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import trush from "../../Assests/trash.svg";
import edit from "../../Assests/edit.svg";
import eye from "../../Assests/eye.svg";

const initialData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  empId: `EMP${1000 + i}`,
  dept: i % 3 === 0 ? "Design" : i % 3 === 1 ? "Development" : "HR",
  role:
    i % 3 === 0 ? "UI/UX Designer" : i % 3 === 1 ? "Developer" : "HR Executive",
  type: i % 2 === 0 ? "Office" : "Remote",
  status: i % 4 === 0 ? "Temporary" : "Permanent",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

export default function EmployeeTable() {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    const filtered = initialData.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered);
    setPage(1);
  };

  const handleFilter = (filterType) => {
    const filtered = initialData.filter((emp) => emp.status === filterType);
    setData(filtered);
    setPage(1);
    handleClose();
  };

  const handleDelete = (id) => {
    const filtered = data.filter((emp) => emp.id !== id);
    setData(filtered);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        m: 3,
        width: "1095px",
        height: "872px",
        overflow: "hidden",
        ml: 45,
        mt: "-1530px",
        boxShadow: "0px 0px 0px 0px white",
        border: "1px  solid rgba(162, 161, 168, 0.2)",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 330,
            height: 50,
            borderRadius: 10,
            pl: 2,
            pr: 2,
            gap: 1.25,
            boxShadow: "0px 0px 0px 0px white",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <InputBase
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ ml: 1, flex: 1 }}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{
              backgroundColor: "rgba(113, 82, 243, 1)",
              textTransform: "none",
              width: 221,
              height: 50,
              borderRadius: 10,
              padding: "20px",
              gap: "10px",
            }}
           onClick={() => navigate("/add-employee")} 

          >
            Add New Employee
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={handleClick}
            sx={{
              textTransform: "none",
              borderRadius: 3,
              width: 117,
              height: 50,
              padding: "20px",
              gap: "10px",
              borderWidth: "1px",
            }}
          >
            Filter
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleFilter("Permanent")} sx={{ bgcolor: "rgba(113, 82, 243, 0.1)" }}>
              Permanent
            </MenuItem>
            <MenuItem onClick={() => handleFilter("Temporary")}>Temporary</MenuItem>
          </Menu>
        </Box>
      </Box>

      <TableContainer sx={{ maxHeight: 650, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {["Employee Name", "Employee ID", "Department", "Designation", "Type", "Status", "Action"].map((h) => (
                <TableCell key={h} sx={{ fontWeight: 600 }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((emp) => (
              <TableRow key={emp.id} hover>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Avatar src={emp.avatar} alt={emp.name} sx={{ width: 32, height: 32 }} />
                    <Typography>{emp.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{emp.empId}</TableCell>
                <TableCell>{emp.dept}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.type}</TableCell>
                <TableCell>
                  <Chip
                    label={emp.status}
                    sx={{
                      bgcolor: emp.status === "Permanent" ? "#f0e7ff" : "#ffe6e6",
                      color: emp.status === "Permanent" ? "#8e63f3" : "#d32f2f",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => alert(`Viewing ${emp.name}`)}>
                    <img src={eye} alt="View" style={{ width: "24px", height: "24px" }} />
                  </IconButton>
                  <IconButton onClick={() => alert(`Editing ${emp.name}`)}>
                    <img src={edit} alt="edit" style={{ width: "24px", height: "24px" }} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(emp.id)}>
                    <img src={trush} alt="trush" style={{ width: "24px", height: "24px" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Footer */}
      <Box display="flex" justifyContent="space-between" mt={6}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">Showing</Typography>
          <FormControl size="small">
            <Select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setPage(1);
              }}
              sx={{ borderRadius: 2, minWidth: 80 }}
            >
              {[10, 20].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Showing {paginatedData.length} of {data.length} records
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handlePrevPage} disabled={page === 1}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
            <Button
              key={pg}
              size="small"
              variant={pg === page ? "contained" : "outlined"}
              onClick={() => setPage(pg)}
              sx={{
                minWidth: 32,
                borderRadius: 1,
                mx: 0.5,
                backgroundColor: pg === page ? "#8e63f3" : "transparent",
                color: pg === page ? "#fff" : "inherit",
                borderColor: "#dcdcdc",
                "&:hover": {
                  backgroundColor: pg === page ? "#7a56f0" : "#f5f5f5",
                },
              }}
            >
              {pg}
            </Button>
          ))}
          <IconButton onClick={handleNextPage} disabled={page === totalPages}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
