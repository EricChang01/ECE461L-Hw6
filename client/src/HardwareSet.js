import {useState} from 'react';
import {Button, ButtonGroup, TextField} from '@mui/material';
const api_endpoint = 'https://ece461l-hw6-e65d16f70191.herokuapp.com'

function HardwareSet(props) {
    const [qty, setQty] = useState('');

    const handleQtyChange = (e) => {
        setQty(e.target.value);
      };
    
    const checkInHardware = async (projectId, qty) => {
        try {
          const response = await fetch(`${api_endpoint}/checkInHardware?projectId=${projectId}&qty=${qty}`);
          const data = await response.json();
          alert(`${data.qty} hardware checked in`);
        } catch (error) {
          console.error('Error checking in hardware:', error);
        }
      };
    
      // Function to call the checkOutHardware API
      const checkOutHardware = async (projectId, qty) => {
        try {
          const response = await fetch(`${api_endpoint}/checkOutHardware?projectid=${projectId}&qty=${qty}`);
          const data = await response.json();
          alert(`${data.qty} hardware checked out`);
        } catch (error) {
          console.error('Error checking out hardware:', error);
        }
      };    

    const HwSet = "HWSet " + props.hw_id + ": " + props.hw_asgn + "/" + props.tot_avail;
    return (
        <ButtonGroup variant="outlined" aria-label="Basic button group" style = {{display: "flex", gap: "10px"}}>
            <h4>{HwSet}</h4>
            <TextField id="outlined-basic" label="Enter qty" variant="outlined" value={qty} onChange={handleQtyChange}/>
            <div style={{ display: "flex", gap: "10px"}}>
                <Button onClick={() => checkInHardware('123', qty)}>Check in</Button>
                <Button onClick={() => checkOutHardware('123', qty)}>Check out</Button>
            </div>
        </ButtonGroup>
    );
}

export default HardwareSet;