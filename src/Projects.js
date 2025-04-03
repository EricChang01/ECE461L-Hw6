import Project from "./Project";

function Projects() {
    return (
            <div style={{ margin: "30px", border: "1px solid black", padding: "30px",  width: "1200px", alignItems: "center"}}>
                <h2 style = {{textAlign: "left"}}>Projects</h2>
                <Project proj_name = 'Project Name 1' hw1_asgn="50" hw1_avail="100" hw2_asgn="0" hw2_avail="100"/>
                <br/>
                <Project proj_name = 'Project Name 2' hw1_asgn="50" hw1_avail="100" hw2_asgn="0" hw2_avail="100"/>
                <br/>
                <Project proj_name = 'Project Name 3' hw1_asgn="0" hw1_avail="100" hw2_asgn="0" hw2_avail="100"/>
            </div>
    );
}
export default Projects;