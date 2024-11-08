
const Contact = () => {
  // handle logout
 

  return (
    <div className="container mt-5">
      <h1>Welcome to Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
        voluptates saepe nulla. Quia, odit officiis. Odit debitis tempora a sed,
        ipsum laborum, ducimus saepe officiis, cupiditate et voluptates magni.
      </p>

      <div>
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};


export default Contact;
