const withMakeupComponent = (WrappedComponent) => {
  const WithMakeupComponent = (props) => {
    // some additional functionality to play with
    return (
      <div>
        {/* some more items based on condition */}
        <WrappedComponent {...props} />
      </div>
    );
  };
  return WithMakeupComponent;
};

const PlainComponent = () => {
  // render the component
};

const FancyComponent = withMakeupComponent(PlainComponent);

const Type1TodoListWithHomeButton = withHomeButton(Type1TodoList);

const Type2TodoListWithHomeButton = withHomeButton(Type2TodoList);
