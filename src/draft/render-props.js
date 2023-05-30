const BaseComponent = ({ renderHeading, renderList }) => {
  // state: title, list

  // logic handlers: add, remove, update

  return (
    <div>
      {renderHeading(title)}
      {renderList(list, add, remove, update)}
    </div>
  );
};

const ApplyRenderPropsComponent = () => {
  return (
    <BaseComponent
      renderHeading={(title) => <h1>{title}</h1>}
      renderList={(list, add, remove, update) => (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => update(item.id)}>Update</button>
              <button onClick={() => remove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    />
  );
};
