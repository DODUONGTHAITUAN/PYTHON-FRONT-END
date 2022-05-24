import ReactLoading from "react-loading";

const Loading = (props) => {
    const { type, color, height, width } = props;
    return (
        <ReactLoading
            type={type ? type : "bubbles"}
            color={color ? color : "#000"}
            height={height ? height : "20%"}
            width={width ? width : "20%"}
        />
    );
};

export default Loading;
