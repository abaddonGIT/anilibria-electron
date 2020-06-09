import React, { Component, ReactNode } from 'react';
import LeftSideBar from "../components/LeftSideBar";

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
        {children}
        </main>
      </>
    );
  }
}

export default App;
