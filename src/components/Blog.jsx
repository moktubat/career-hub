import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='p-7 '>
                    <h1 className='text-4xl font-bold pb-3'>When should you use context API?</h1>
                    <p className='text-lg'>With React Context, we can pass data deeply. While some developers may want to use Context as a global state management solution, doing so is tricky. While React Context is native and simple, it isn’t a dedicated state management tool like Redux, and it doesn’t come with sensible defaults.</p>
                </div>
                <div className='p-7 '>
                <h1 className='text-4xl font-bold pb-3'>What is a custom hook?</h1>
                <p className='text-lg'>Custom Hooks consist of built-in React Hooks or other custom Hooks. Therefore a custom Hook is always a new composition of one or multiple Hooks. If a custom Hook does not use any hooks internally, it's not a custom Hook and shouldn't have the prefix "use".</p>
                </div>
                <div className='p-7 '>
                <h1 className='text-4xl font-bold pb-3'>What is useRef?</h1>
                <p className='text-lg'>Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
                </div>
                <div className='p-7 '>
                <h1 className='text-4xl font-bold pb-3'>What is useMemo?</h1>
                <p className='text-lg'>useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;