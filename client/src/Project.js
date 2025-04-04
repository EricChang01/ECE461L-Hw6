import {useState} from 'react';
import HardwareSets from './HardwareSets';

// const api_endpoint = 'https://ece461l-hw6-e65d16f70191.herokuapp.com'

function Project(props) {
    const [join, setJoin] = useState("Join");

    const joinProject = async (projectId) => {
      try {
        const response = await fetch('/api/joinProject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ projectId })
        });
        const data = await response.json();
        alert(`Joined ${data.projectId}`);
      } catch (error) {
        console.error('Error joining project:', error);
      }
    };
    
    const leaveProject = async (projectId) => {
      try {
        const response = await fetch('/api/leaveProject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ projectId })
        });
        const data = await response.json();
        alert(`Left ${data.projectId}`);
      } catch (error) {
        console.error('Error leaving project:', error);
      }
    };

    const handleClick = async () => {
        if (join == "Join") {
            const projectId = '123';
            const joinMsg = await joinProject(projectId);
        } else {
            const projectId = '123';
            const leaveMsg = await leaveProject(projectId);
        }
        setJoin((join == "Join")? "Leave" : "Join");
            
    }
    return (
        <div style={{display: "flex", gap: "30px", border: "1px solid black", padding: "8px"}}>
            <h2 style = {{display: "flex", alignItems: "center"}}>{props.proj_name}</h2>
            <h4 style = {{display: "flex", alignItems: "center"}}>List, of, authorized, user</h4>
            <HardwareSets hw1_asgn={props.hw1_asgn} hw1_avail={props.hw1_avail} hw2_asgn={props.hw2_asgn} hw2_avail={props.hw2_avail}/>
            <button onClick={() => handleClick()} style = {{width: "100px", height: "50px", marginTop: "40px", fontSize: "20px"}}>{join}</button>
        </div>
    );
}
export default Project;