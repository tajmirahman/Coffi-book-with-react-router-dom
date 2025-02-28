

const Title = ({title, subTitle}) => {
    return (
        <div >
            <h1 className="text-center text-3xl mt-5">{title}</h1>
            <p className="text-center mt-2 font-thin">{subTitle}</p>
        </div>
    );
};

export default Title;