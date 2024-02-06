import { Code } from "@nextui-org/react";

const HocDef = () => {
  return (
    <div className="mx-2">
      <h1 className="bg-gray-50 rounded-lg p-5 text-neutral-600 text-xl font-bold">
        Higher-Order Component (HOC)
      </h1>
      <p className="bg-gray-50 p-5 w-fit text-neutral-500 text-lg font-catamaran font-normal rounded-xl my-2">
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic.
        <br /> HOCs are not part of the React API, per se. They are a pattern
        that emerges from React’s compositional nature.
      </p>
      <p className="bg-gray-50 p-5 w-fit text-neutral-500 text-lg font-catamaran font-normal rounded-xl my-2">
        Concretely, a higher-order component is a function that takes a
        component and returns a new component.
      </p>
      <Code className="bg-gray-700 text-teal-100 p-5 text-lg">
        const <span className="text-orange-400">EnhancedComponent</span> =
        higherOrderComponent(
        <span className="text-sky-400">WrappedComponent</span>);
      </Code>
    </div>
  );
};

export default HocDef;
