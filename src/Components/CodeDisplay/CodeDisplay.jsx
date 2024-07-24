
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
