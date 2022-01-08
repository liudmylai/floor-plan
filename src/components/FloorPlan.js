import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
    return (
        <div className="floor-plan">
            <Bedroom bedNum={1} />
            <LivingRoom />
            <Kitchen />
            <Bath size={'full'} />
            <Bedroom bedNum={2} />
            <Bath size={'half'} />
            <Bedroom bedNum={3} />
        </div>
    );
}
export default FloorPlan;