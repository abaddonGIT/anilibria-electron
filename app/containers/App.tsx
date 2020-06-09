import React, { Component, ReactNode } from 'react';
import LeftSideBar from "../components/LeftSideBar";
import TopBar from "../components/TopBar";

type Props = {
  children: ReactNode;
};

class App extends Component<Props> {
  public render() {
    const { children } = this.props;
    return (
      <>
        <LeftSideBar />
        <main>
          <TopBar />
          {children}
        </main>
      </>
    );
  }
}

export default App;
