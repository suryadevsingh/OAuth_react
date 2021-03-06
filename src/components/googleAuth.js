import React from "react";

class GoogleAuth extends React.Component {
   state = { isSignedIn: null };
   componentDidMount() {
      window.gapi.load("client:auth2", () => {
         window.gapi.client
            .init({
               clientId:
                  "765373311146-cbhtttpsemehfjk5421gj24ctc949vbt.apps.googleusercontent.com",
               scope: "email",
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({ isSignedIn: this.auth.isSignedIn.get() });
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
   };

   onSignInClick = () => {
      this.auth.signIn();
   };
   onSignOutClick = () => {
      this.auth.signOut();
   };

   renderAuthButton() {
      if (this.state.isSignedIn === null) {
         return null;
      } else if (this.state.isSignedIn) {
         return (
            <button
               className="ui red google button"
               onClick={this.onSignOutClick}
            >
               <i className="google icon" />
               Sign Out
            </button>
         );
      } else {
         return (
            <button
               className="ui red google button"
               onClick={this.onSignInClick}
            >
               <i className="google icon" />
               Sign In with Google
            </button>
         );
      }
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}

export default GoogleAuth;
