function Notification(props) {
  // Write your code here.
  const { className, iconUrl, notificationText } = props;

  return (
    <div className={`box ${className}`}>
      <img className="icon" src={iconUrl} />
      <p className="notificationText">{notificationText}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="background-container">
    <h1 className="heading">Notifications</h1>
    <div className="sub-container">
      <Notification
        className="notification-Info"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message"
      />
      <Notification
        className="notification-success"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message"
      />
      <Notification
        className="notification-warning"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationText="Warning Message"
      />
      <Notification
        className="notification-error"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
