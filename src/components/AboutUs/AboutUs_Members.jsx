import "./AboutUs.css";

export default function AboutUs_Members() {
  return (
    <div id="AboutUs_Members">
      <div className="AboutUs_MembersDescription">
        <h1>Meet Our Members</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <div className="AboutUs_MembersProperty">
        <div className="membersName">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="membersName">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="membersName">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="membersName">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
      </div>
      <button>MORE</button>
    </div>
  );
}
