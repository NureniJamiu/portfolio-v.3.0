import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const MarkdownComponent = ({ children }) => {
  return (
    <div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a(props) {
            const { node, ...rest } = props;
            return (
              <a
                {...rest}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1.5px] border-b-[#727272] hover:border-b-[#673de6]"
              />
            );
          },
          blockquote(props) {
            const { node, ...rest } = props;
            return (
              <blockquote
                {...rest}
                className="ml-3 border-l-2 border-[#727272] pl-5"
              />
            );
          },
          li(props) {
            const { node, ...rest } = props;
            return <li {...rest} className="list-disc list-inside" />;
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
};

export default MarkdownComponent;
