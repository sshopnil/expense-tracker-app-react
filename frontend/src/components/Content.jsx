const Content = ({ activeItem }) => {
    return (
      <div className="content">
        <h1>{activeItem}</h1>
        <p>This is the {activeItem} page content.</p>
      </div>
    );
  };
  
  export default Content;