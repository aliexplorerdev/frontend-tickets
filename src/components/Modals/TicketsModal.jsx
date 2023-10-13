import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { baseURL } from "../../config/url";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TicketsModal({ open, handleClose }) {
  let userId;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [assignedTo, setAssignTo] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  //its temp id for admin
  const [createdBy, setCreatedBy] = useState("6527e4a3f6c8aae604b69ee6");
  const getUsers = async () => {
    const res = await axios.get(`${baseURL}/users`);
    const data = res.data.users;
    setUsers(data);
  };

  const userOptions = users.map((user) => ({
    label: user.name,
    value: user._id,
  }));
  const handleSave = async (e) => {
    e.preventDefault();
    // Handle saving the form data
    // You can access the field values: title, description, priority, assignTo, dueDate, and status
    // Example: Send the data to an API or perform an action
    console.log({
      title,
      description,
      priority,
      assignedTo,
      dueDate,
      status,
    });
    const data = {
      title,
      description,
      priority,
      assignedTo,
      dueDate,
      status,
      createdBy,
    };
    try {
      const save = await axios.post(`${baseURL}/tickets`, data);
      save && toast.success("SuccessFully created ticket");
    } catch (error) {
      toast.error(JSON.parse(error));
    }
    handleClose(); // Close the modal after saving
  };
  const handleAssignToChange = (selectedOption) => {
    // Access the _id value of the selected option
    const selectedUserId = selectedOption.value;
    console.log(selectedUserId);
    setAssignTo(selectedUserId);
  };
  const statusOptions = [
    { label: "Open", value: "Open" },
    { label: "In Progress", value: "In Progress" },
    { label: "Closed", value: "Closed" },
  ];
  const animatedComponents = makeAnimated();

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Add Ticket</Typography>
          <Divider />
          <form
            onSubmit={(e) => {
              handleSave(e);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    size="small"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Description"
                  variant="standard"
                  size="small"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  required
                  components={animatedComponents}
                  options={userOptions}
                  isMulti={false} // Set to true for multi-select
                  value={userOptions.find(
                    (option) => option.value === assignedTo
                  )}
                  onChange={handleAssignToChange}
                  placeholder="Assigned To"
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  required
                  components={animatedComponents}
                  options={statusOptions}
                  isMulti={false}
                  value={statusOptions.find(
                    (option) => option.value === status
                  )} // To display the selected status
                  onChange={(selectedOption) => setStatus(selectedOption.value)}
                  placeholder="Select Status"
                />
              </Grid>
            </Grid>
            <div style={{ margin: "10px 0px" }}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
