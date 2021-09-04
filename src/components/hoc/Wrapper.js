const Wrapper = (WrappeComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappeComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
