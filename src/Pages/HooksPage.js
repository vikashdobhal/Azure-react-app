import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
const markdown = `Here is some JavaScript code:

~~~js
import { useState } from "react";
~~~
`
function HooksPage() {
    // const file_name = 'Usestatehooks.md';
    // const [post, setPost] = useState('');
    // useEffect(() => {
    //     import(`../tutorials/${file_name}`)
    //         .then(res => {
    //             fetch(res.default)
    //                 .then(res => res.text())
    //                 .then(res => setPost(res))
    //                 .catch(err => console.log(err));
    //         })
    //         .catch(err => console.log(err));
    // });
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-5'>
                <h1 className='heading-main'>React Hooks</h1>
                <div className='topic-info'>
                    <p>Hooks were added to React in version 16.8.</p>
                    <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
                    <p>Although Hooks generally replace class components, there are no plans to remove classes from React.</p>
                </div>
                <div className='lightgreen-bg mt-4'>
                    <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
                </div>
                <div className='code-block'>
                    <h3>Use</h3>
                    <ReactMarkdown
                        children={markdown}
                        components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                            />
                            ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                            )
                        }
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HooksPage