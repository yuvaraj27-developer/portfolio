import React, { ReactNode } from 'react';

interface FailSafeProps {
  children: ReactNode;
}

interface FailSafeState {
  hasError: boolean;
}

class FailSafe extends React.Component<FailSafeProps, FailSafeState> {
  constructor(props: FailSafeProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>error component</p>;
    }
    return this.props.children;
  }
}

export default FailSafe;
