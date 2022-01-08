function Bedroom(props) {
    return (
        <div className={"room bedroom bed-" + props.bedNum}>
            <p>Bedroom {props.bedNum}</p>
        </div>
    );
}
export default Bedroom;