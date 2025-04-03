import HardwareSet from "./HardwareSet";
function HardwareSets(props) {
    return (
        <div>
            <HardwareSet hw_id="1" hw_asgn={props.hw1_asgn} tot_avail={props.hw1_avail}/>
            <br/>
            <HardwareSet hw_id="2" hw_asgn={props.hw2_asgn} tot_avail={props.hw2_avail}/>
        </div>
    );
}
export default HardwareSets;