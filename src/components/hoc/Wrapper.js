const Wrapper = (WrappComponent, className) => {
  return (props) => {
    console.log("cccccliccccccccccccccckkkkk");
    return (
      <div className={className}>
        <WrappComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
