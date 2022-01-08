import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
    return (
        <div className="room kitchen">
            <p>Kitchen</p>
            <Oven />
            <Sink />
        </div>
    );
}
export default Kitchen;