import Divider from "@/components/custom/Divider";
import MarkdownComponent from "@/components/custom/MarkdownComponent";
import PageTitle from "@/components/custom/PageTitle";
import React from "react";

const Page = () => {
  const markdown = [
    {
      date: "2024-06-01",
      title: "[Understanding AI](https://example.com/understanding-ai)",
      url: "understandingai.com",
      body: "> The future of AI is not just about machines, but about enhancing human capabilities. - John Doe\n\n",
    },
    {
      date: "2024-06-02",
      title:
        "[The Basics of Machine Learning](https://example.com/basics-of-ml)",
      url: "basics.com",
      body: '> Machine Learning is the study of computer algorithms that improve automatically through experience." - Jane Smith',
    },
    {
      date: "2024-06-03",
      title:
        "[Deep Learning Demystified](https://example.com/deep-learning-demystified)",
      url: "deeplearning.com",
      body: ">Deep Learning is a complex field that deals with neural networks with many layers. To get started, read the [Deep Learning Introduction](https://example.com/dl-introduction)",
    },
    {
      date: "2024-06-04",
      title:
        "[Exploring Natural Language Processing](https://example.com/nlp-exploration)",
      url: "nlpexploration.com",
      body: '>Natural *Language Processing* (NLP) enables machines to understand human language. An excellent starting point is the [NLP Fundamentals](https://example.com/nlp-fundamentals)."NLP is a critical component in the interaction between humans and machines." - Michael Brown',
    },
  ];

  return (
    <div className="pb-20">
      <PageTitle
        title="Bookmarks"
        description="Archive of interesting links."
      />
      <div>
        {markdown.map((item, index) => (
          <>
            <div
              key={index}
              className="flex gap-5 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb]"
            >
              <div className="w-28 text-[#727272]">{item.date}</div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="font-semibold">
                  <MarkdownComponent>{item.title}</MarkdownComponent>
                </div>
                <div className="text-[#727272] text-[13px]">
                  <MarkdownComponent>{item.url}</MarkdownComponent>
                </div>
                <div className="mt-2">
                  <MarkdownComponent>{item.body}</MarkdownComponent>
                </div>
              </div>
            </div>
            <Divider type="border-dashed" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
