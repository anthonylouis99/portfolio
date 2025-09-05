import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600 font-semibold">
          ⚠️ Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}
