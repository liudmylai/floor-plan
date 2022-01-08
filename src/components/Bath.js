function Bath(props) {
    return (
        <div className={"room bath " + props.size + "-bath"}>
            <p>{props.size} Bath</p>
        </div>
    );
}
export default Bath;