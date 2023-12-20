const ErrorComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex flex-col w-[100vw] mx-auto justify-center items-center"
        role="alert"
      >
        <p className="text-red-400">Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
};

export default ErrorComponent;
