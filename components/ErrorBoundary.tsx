import React, { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}
interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }
  public static getDerivedStateFromError(_error: Error): IState {
    return { hasError: true };
  }
  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ _error, errorInfo });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
